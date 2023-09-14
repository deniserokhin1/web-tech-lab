import { type Theme } from '1_app/providers/ThemeProvider'
import { type RefObject, useEffect, useState } from 'react'

export const useGetMainColor = (
    node: RefObject<HTMLDivElement>,
    theme: Theme,
    variable: string = '--bg-color',
): string => {
    const [color, setColor] = useState<string>('')

    useEffect(() => {
        if (!node.current) return

        const color = window.getComputedStyle(node.current).getPropertyValue(variable)
        setColor(color)
    }, [node, theme, variable])

    return color
}
