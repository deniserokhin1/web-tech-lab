import {
    useRef,
    type MutableRefObject,
    type ReactNode,
    type UIEvent,
} from 'react'

import { useLocation } from 'react-router-dom'

import {
    useAppDispatch,
    useAppSelector,
    type StateSchema,
} from '@/1_app/providers/StoreProvider'
import { getUIScrollByPath, uiActions, getIsScrolling } from '@/4_features/UI'
import { useDebouce } from '@/6_shared/hooks/useDebounce'
import { useInfinityScroll } from '@/6_shared/hooks/useInfinityScroll'
import { useInitialEffect } from '@/6_shared/hooks/useInitialEffect'
import { classNames } from '@/6_shared/lib'

import cls from './PageWrapper.module.scss'

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
    const { pathname } = useLocation()

    const dispatch = useAppDispatch()
    const { setScrollPosition, setScrolling } = uiActions
    const scrollPosition = useAppSelector((state: StateSchema) =>
        getUIScrollByPath(state, pathname),
    )
    const isScrolling = useAppSelector(getIsScrolling)

    useInfinityScroll({
        callback: onScrollEnd,
        triggerRef,
        wrapperRef,
    })

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition
    })

    const scrollHandlerPosition = useDebouce(
        (e: UIEvent<HTMLDivElement>): void => {
            if (pathname.match(/\/articles\/\d+/g)?.length) return

            const target = e.target as HTMLElement
            dispatch(
                setScrollPosition({
                    path: pathname,
                    position: target.scrollTop,
                }),
            )
        },
        100,
    )

    const scrollEndHandler = useDebouce((): void => {
        dispatch(setScrolling(false))
    }, 1000)

    const combinedScrollHandler = (e: UIEvent<HTMLDivElement>): void => {
        console.log('start combinedScrollHandler')
        dispatch(setScrolling(true))
        scrollHandlerPosition(e)
        scrollEndHandler()
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
