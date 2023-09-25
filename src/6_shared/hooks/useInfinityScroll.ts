import { type MutableRefObject, useEffect } from 'react'

export interface IUseInfinityScroll {
    callback?: () => void
    triggerRef: MutableRefObject<HTMLElement>
    wrapperRef: MutableRefObject<HTMLElement>
}

export const useInfinityScroll = ({ callback, triggerRef, wrapperRef }: IUseInfinityScroll): void => {
    useEffect(() => {
        let observer: IntersectionObserver | null = null
        const wrapper = wrapperRef.current
        const trigger = triggerRef.current

        if (callback) {
            const options = {
                root: wrapper,
                rootMargin: '1px',
                threshold: 1.0,
            }

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) callback()
            }, options)

            observer.observe(trigger)
        }

        return () => {
            // eslint-disable-next-line
            if (observer) observer.unobserve(trigger)
        }
    }, [triggerRef, wrapperRef, callback])
}
