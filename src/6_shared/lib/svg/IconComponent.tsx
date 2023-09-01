import type { FC } from 'react'
import { ColorPalette } from './components/ColorPalette'
import { type ISvgOptions, type IconComponentName } from './types'
import { BurgerMenu } from './components/BurgerMenu'
import { Home } from './components/Home'
import { Info } from './components/Info'

export interface IconComponentProps extends ISvgOptions {
    name: IconComponentName
}

export const IconComponent: FC<IconComponentProps> = (props) => {
    const { name, pathFill } = props

    switch (name) {
        case 'palette':
            return <ColorPalette pathFill={pathFill} />

        case 'burger':
            return <BurgerMenu pathFill={pathFill} />

        case 'home':
            return <Home pathFill={pathFill} />

        case 'info':
            return <Info pathFill={pathFill} />

        default:
            break
    }
}
