import type { FC } from 'react'
import { ColorPalette } from './components/ColorPalette'
import { type ISvgOptions, type IconComponentName } from './types'
import { BurgerMenu } from './components/BurgerMenu'
import { Home } from './components/Home'
import { Info } from './components/Info'
import { Profile } from './components/Profile'
import { Articles } from './components/Articles'
import { Calendar } from './components/Calendar'
import { Eye } from './components/Eye'
import { Back } from './components/Back'

export interface IconComponentProps extends ISvgOptions {
    name: IconComponentName
}

export const IconComponent: FC<IconComponentProps> = (props) => {
    const { name, pathFill, opacity } = props

    switch (name) {
        case 'palette':
            return <ColorPalette pathFill={pathFill} />

        case 'burger':
            return <BurgerMenu pathFill={pathFill} />

        case 'home':
            return <Home pathFill={pathFill} />

        case 'info':
            return <Info pathFill={pathFill} />

        case 'profile':
            return <Profile pathFill={pathFill} />

        case 'articles':
            return <Articles pathFill={pathFill} />

        case 'calendar':
            return <Calendar pathFill={pathFill} />

        case 'eye':
            return <Eye pathFill={pathFill} opacity={opacity} />

        case 'back':
            return <Back pathFill={pathFill} opacity={opacity} />

        default:
            break
    }
}
