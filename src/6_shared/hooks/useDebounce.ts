import { type MutableRefObject, useCallback, useRef, useEffect } from 'react'

export const useDebouce = <T extends (...args: any[]) => any>(callback: T, delay: number): (() => void) => {
    const timer = useRef(null) as MutableRefObject<NodeJS.Timeout | null>

    useEffect(() => {
        return clearTimeout(timer.current as NodeJS.Timeout)
    }, [])

    return useCallback(
        (...args: Parameters<typeof callback>) => {
            if (timer.current) {
                clearTimeout(timer.current)
            }
            timer.current = setTimeout(() => {
                callback(...args)
            }, delay)
        },
        [callback, delay],
    )
}
