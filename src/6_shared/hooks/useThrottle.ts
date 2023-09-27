import { useCallback, useEffect, useRef } from 'react'

export const useThrottle = <T extends (...args: any[]) => any>(callback: T, delay: number): (() => void) => {
    const trottleRef = useRef(false)
    const timeoutRef = useRef<any>(null)

    useEffect(() => {
        return clearTimeout(timeoutRef.current)
    }, [])

    return useCallback(
        (...args: Parameters<typeof callback>) => {
            if (!trottleRef.current) {
                callback(...args)
                trottleRef.current = true

                timeoutRef.current = setTimeout(() => {
                    trottleRef.current = false
                }, delay)
            }
        },
        [callback, delay],
    )
}
