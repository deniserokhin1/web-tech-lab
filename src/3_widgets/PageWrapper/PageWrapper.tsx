import { type ReactNode, useRef, type MutableRefObject, type UIEventHandler, type UIEvent } from 'react'
import { classNames } from '6_shared/lib'
import cls from './PageWrapper.module.scss'
import { useInfinityScroll } from '6_shared/hooks/useInfinityScroll'
import { getUIScrollByPath, uiActions } from '4_features/UI'
import { type StateSchema, useAppDispatch, useAppSelector } from '1_app/providers/StoreProvider'
import { useLocation } from 'react-router-dom'
import { useInitialEffect } from '6_shared/hooks/useInitialEffect'
import { useThrottle } from '6_shared/hooks/useThrottle'

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
    const { setScrollPosition } = uiActions
    const scrollPosition = useAppSelector((state: StateSchema) => {
        return getUIScrollByPath(state, pathname)
    })

    useInfinityScroll({
        callback: onScrollEnd,
        triggerRef,
        wrapperRef,
    })

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition
    })

    const scrollHandler = useThrottle((e: UIEvent<HTMLDivElement>): void => {
        dispatch(setScrollPosition({ path: pathname, position: e.currentTarget.scrollTop }))
    }, 500)

    const mods = { [cls.offsetTop]: offsetTop }

    return (
        <div
            className={classNames(cls.container, mods, [className])}
            ref={wrapperRef}
            onScroll={scrollHandler}
        >
            {children}
            <div ref={triggerRef} />
        </div>
    )
}
