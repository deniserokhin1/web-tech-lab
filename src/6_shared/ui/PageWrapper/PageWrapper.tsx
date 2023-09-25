import { type ReactNode, useRef, type MutableRefObject } from 'react'
import { classNames } from '6_shared/lib'
import cls from './PageWrapper.module.scss'
import { useInfinityScroll } from '6_shared/hooks/useInfinityScroll'

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

    useInfinityScroll({
        callback: onScrollEnd,
        triggerRef,
        wrapperRef,
    })

    const mods = { [cls.offsetTop]: offsetTop }

    return (
        <div className={classNames(cls.container, mods, [className])} ref={wrapperRef}>
            {children}
            <div ref={triggerRef} />
        </div>
    )
}
