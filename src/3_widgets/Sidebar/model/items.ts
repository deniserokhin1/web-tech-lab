import { RoutePath } from '@/6_shared/const/router'
import { type IconComponentName } from '@/6_shared/lib/svg/types'

export interface ISidebarItems {
    path: string
    text: string
    icon: IconComponentName
    authOnly?: boolean
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
        authOnly: true,
    },
    {
        icon: 'articles',
        path: RoutePath.articles,
        text: 'Статьи',
        authOnly: true,
    },
]
