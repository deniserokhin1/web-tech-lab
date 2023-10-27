import { routePath } from '@/6_shared/const/router'
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
        path: routePath.main(),
        text: 'Главная',
    },
    {
        icon: 'info',
        path: routePath.about(),
        text: 'О проекте',
    },
    {
        icon: 'profile',
        path: routePath.profile(':id'),
        text: 'Профиль',
        authOnly: true,
    },
    {
        icon: 'articles',
        path: routePath.articles(),
        text: 'Статьи',
        authOnly: true,
    },
]
