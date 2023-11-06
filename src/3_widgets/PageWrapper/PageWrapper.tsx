import { useRef, type MutableRefObject, type ReactNode, type UIEvent, useLayoutEffect } from 'react'

import { useLocation } from 'react-router-dom'

import { useAppDispatch, useAppSelector, type StateSchema } from '@/1_app/providers/StoreProvider'
import { addNewCommentActions, getAddCommentClick } from '@/4_features/AddNewComment'
import { getUIScrollByPath, uiActions, getIsScrolling } from '@/4_features/UI'
import Up from '@/6_shared/assets/up.svg'
import { useDebouce } from '@/6_shared/hooks/useDebounce'
import { useInfinityScroll } from '@/6_shared/hooks/useInfinityScroll'
import { useInitialEffect } from '@/6_shared/hooks/useInitialEffect'
import { classNames } from '@/6_shared/lib'
import { Card } from '@/6_shared/ui/Card'
import { Icon } from '@/6_shared/ui/Icon'

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
    const isClickCommentForm = useAppSelector(getAddCommentClick)
    const { setClick } = addNewCommentActions

    useInfinityScroll({
        callback: onScrollEnd,
        triggerRef,
        wrapperRef,
    })

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition
    })

    const scrollHandlerPosition = useDebouce((e: UIEvent<HTMLDivElement>): void => {
        // if (pathname.match(/\/articles\/\d+/g)?.length) return

        const target = e.target as HTMLElement
        dispatch(
            setScrollPosition({
                path: pathname,
                position: target.scrollTop,
            }),
        )
    }, 100)

    const scrollEndHandler = useDebouce((): void => {
        dispatch(setScrolling(false))
    }, 1000)

    const combinedScrollHandler = (e: UIEvent<HTMLDivElement>): void => {
        dispatch(setScrolling(true))
        scrollHandlerPosition(e)
        scrollEndHandler()
    }

    const upHandler = (): void => {
        const divScroll = wrapperRef.current
        divScroll.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    const mods = {
        [cls.offsetTop]: offsetTop,
        [cls.scrolling]: isScrolling,
        [cls.show]: scrollPosition > 100,
    }

    useLayoutEffect(() => {
        if (!isClickCommentForm) return

        const divScroll = wrapperRef.current
        divScroll.scrollTo({
            top: divScroll.scrollHeight,
            behavior: 'smooth',
        })
        
        dispatch(setClick(false))
    }, [dispatch, isClickCommentForm, setClick])

    return (
        <div
            className={classNames(cls.container, mods, [className])}
            ref={wrapperRef}
            onScroll={combinedScrollHandler}
        >
            {children}

            <Card className={cls.upButton} fitContent padding={5} borderRadius={50}>
                <Icon Svg={Up} onClick={upHandler} />
            </Card>

            <div className={cls.footer} ref={triggerRef} />
        </div>
    )
}
