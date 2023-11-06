import { TransitionFn, config, useTransition } from '@react-spring/web'

export const usePageWrapperSpring = (
    scrollPosition: number,
): TransitionFn<number, { scale: number }> => {
    const transition = useTransition(scrollPosition, {
        from: { scale: 0 },
        leave: { scale: 0 },
        enter: { scale: 1 },
        config: config.gentle,
    })

    return transition
}
