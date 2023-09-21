import { useCallback, useMemo, useState } from 'react'

interface UseHoverBind {
    onMouseEnter: () => void
    onMouseLeave: () => void
}

type UseHoverResult = [UseHoverBind, boolean]

export const useHover = (): UseHoverResult => {
    const [isHover, setIsHover] = useState(false)

    const onMouseEnter = useCallback(() => {
        setIsHover(true)
    }, [])

    const onMouseLeave = useCallback(() => {
        setIsHover(false)
    }, [])

    return useMemo(
        () => [
            {
                onMouseEnter,
                onMouseLeave,
            },
            isHover,
        ],
        [isHover, onMouseEnter, onMouseLeave],
    )
}
