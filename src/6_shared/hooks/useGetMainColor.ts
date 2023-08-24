import { Theme } from '1_app/providers/ThemeProvider'
import { useEffect, useState } from 'react'

export const useGetMainColor = (node: React.MutableRefObject<HTMLElement>, theme: Theme): string => {
    const [color, setColor] = useState<string | null>(null)

    useEffect(() => {
        if (!node.current) return

        const color = window.getComputedStyle(node.current).getPropertyValue('--bg-color')
        setColor(color)
    }, [node, theme])

    return color
}
