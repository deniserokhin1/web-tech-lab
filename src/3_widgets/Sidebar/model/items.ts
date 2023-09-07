import { RoutePath } from '1_app/providers/Router/config/routeConfig'
import { type IconComponentName } from '6_shared/lib/svg/types'

export interface ISidebarItems {
    path: string
    text: string
    icon: IconComponentName
}

export const SidebarItemList: ISidebarItems[] = [
    {
        icon: 'home',
        path: RoutePath.main,
        text: 'Главная',
    },
    {
        icon: 'info',
        path: RoutePath.about,
        text: 'О проекте',
    },
    {
        icon: 'profile',    
        path: RoutePath.profile,
        text: 'Профиль',
    },
]
