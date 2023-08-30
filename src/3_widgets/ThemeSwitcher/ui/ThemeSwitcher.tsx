import { IconComponent, classNames } from '6_shared/lib'
import { useTheme } from '1_app/providers/ThemeProvider'
import { Button } from '6_shared/ui/Button'
import { type FC } from 'react'

export interface ThemeSwitcherProps {
    className?: string
    mainColor: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const { className, mainColor } = props
    const mods = {}

    const { toggleTheme } = useTheme()

    return (
        <Button onClick={toggleTheme} className={classNames('', mods, [className])}>
            <IconComponent name="palette" pathFill={mainColor} />
        </Button>
    )
}
