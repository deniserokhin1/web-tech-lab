import { memo } from 'react'

import { AddArticle } from './components/AddArticle'
import { Articles } from './components/Articles'
import { Back } from './components/Back'
import { BurgerMenu } from './components/BurgerMenu'
import { Calendar } from './components/Calendar'
import { Check } from './components/Check'
import { ColorPalette } from './components/ColorPalette'
import { Down } from './components/Down'
import { Edit } from './components/Edit'
import { Eye } from './components/Eye'
import { Grid } from './components/Grid'
import { Home } from './components/Home'
import { Info } from './components/Info'
import { List } from './components/List'
import { Notifications } from './components/Notifications'
import { Profile } from './components/Profile'
import { type ISvgOptions, type IconComponentName } from './types'

export interface IconComponentProps extends ISvgOptions {
    name: IconComponentName
}

export const IconComponent = memo((props: IconComponentProps) => {
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

        case 'grid':
            return <Grid pathFill={pathFill} opacity={opacity} />

        case 'list':
            return <List pathFill={pathFill} opacity={opacity} />

        case 'edit':
            return <Edit pathFill={pathFill} />

        case 'add':
            return <AddArticle pathFill={pathFill} />

        case 'check':
            return <Check pathFill={pathFill} />

        case 'notifications':
            return <Notifications pathFill={pathFill} />

        case 'down':
            return <Down pathFill={pathFill} />

        default:
            break
    }
})
