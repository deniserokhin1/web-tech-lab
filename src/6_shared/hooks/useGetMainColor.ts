import { type RefObject, useEffect, useState } from 'react'

import { useTheme } from '@/1_app/providers/ThemeProvider'

export const useGetMainColor = (
    node: RefObject<HTMLDivElement>,
    variable: string = '--bg-color',
): string => {
    const [color, setColor] = useState<string>('')

    const { theme } = useTheme()

    useEffect(() => {
        if (!node.current) return

        const color = window.getComputedStyle(node.current).getPropertyValue(variable)
        setColor(color)
    }, [node, theme, variable])

    return color
}
