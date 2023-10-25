import { memo } from 'react'

import { useTheme } from '@/1_app/providers/ThemeProvider'
import { IconComponent, classNames } from '@/6_shared/lib'
import { Button } from '@/6_shared/ui/Button'

export interface ThemeSwitcherProps {
    className?: string
    mainColor: string | undefined
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
    const { className, mainColor } = props
    const mods = {}

    const { toggleTheme } = useTheme()

    return (
        <Button onClick={toggleTheme} className={classNames('', mods, [className])}>
            <IconComponent name="palette" pathFill={mainColor} />
        </Button>
    )
})
