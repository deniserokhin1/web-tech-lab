import type { FC } from 'react'
import { ColorPalette } from './components/ColorPalette'
import { ISvgOptions, IconComponentName } from './types'
import { BurgerMenu } from './components/BurgerMenu'

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

        default:
            break
    }
}
