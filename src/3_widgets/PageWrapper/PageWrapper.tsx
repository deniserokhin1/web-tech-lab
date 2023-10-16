import {
    type ReactNode,
    useRef,
    type MutableRefObject,
    type UIEvent,
    useEffect,
} from 'react'
import { classNames } from '@/6_shared/lib'
import cls from './PageWrapper.module.scss'
import { useInfinityScroll } from '@/6_shared/hooks/useInfinityScroll'
import { getUIScrollByPath, uiActions } from '@/4_features/UI'
import {
    type StateSchema,
    useAppDispatch,
    useAppSelector,
} from '@/1_app/providers/StoreProvider'
import { useLocation } from 'react-router-dom'
import { useInitialEffect } from '@/6_shared/hooks/useInitialEffect'
import { useDebouce } from '@/6_shared/hooks/useDebounce'
import { getIsScrolling } from '@/4_features/UI/model/selectors/getUI'
import { useThrottle } from '@/6_shared/hooks/useThrottle'

interface PageWrapperProps {
    className?: string
    children?: ReactNode
    offsetTop?: boolean
    onScrollEnd?: () => void
}

export const PageWrapper = (props: PageWrapperProps): JSX.Element => {
    const { className, children, offsetTop, onScrollEnd } = props
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
    const timer = useRef() as MutableRefObject<NodeJS.Timeout | null>
    const { pathname } = useLocation()

    const dispatch = useAppDispatch()
    const { setScrollPosition, setScrolling } = uiActions
    const scrollPosition = useAppSelector((state: StateSchema) => {
        return getUIScrollByPath(state, pathname)
    })
    const isScrolling = useAppSelector(getIsScrolling)

    useEffect(() => {
        return () => {
            clearTimeout(timer.current as NodeJS.Timeout)
        }
    }, [])

    useInfinityScroll({
        callback: onScrollEnd,
        triggerRef,
        wrapperRef,
    })

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition
    })

    const scrollHandlerPosition = useDebouce((e: UIEvent<HTMLDivElement>): void => {
        const target = e?.target as HTMLElement
        if (!(target instanceof HTMLElement)) return
        dispatch(setScrollPosition({ path: pathname, position: target.scrollTop }))
    }, 100)

    const scrollHandlerIs = useThrottle((): void => {
        if (!isScrolling) dispatch(setScrolling(true))

        if (timer.current) clearTimeout(timer.current)

        timer.current = setTimeout(() => {
            dispatch(setScrolling(false))
        }, 1200)
    }, 1000)

    const combinedScrollHandler = (e: UIEvent<HTMLDivElement>): void => {
        scrollHandlerPosition(e)
        scrollHandlerIs()
    }

    const mods = {
        [cls.offsetTop]: offsetTop,
        [cls.scrolling]: isScrolling,
    }

    return (
        <div
            className={classNames(cls.container, mods, [className])}
            ref={wrapperRef}
            onScroll={combinedScrollHandler}
        >
            {children}
            <div className={cls.footer} ref={triggerRef} />
        </div>
    )
}
