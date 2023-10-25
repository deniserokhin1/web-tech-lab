import { createSelector } from '@reduxjs/toolkit'

import { getUserAuthData } from '@/5_entities/User'
import { RoutePath } from '@/6_shared/const/router'

import { type ISidebarItems } from '../items'

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sideBarItemsList: ISidebarItems[] = [
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
    ]
    if (userData) {
        sideBarItemsList.push(
            {
                icon: 'profile',
                path: `${RoutePath.profile}${userData.id}`,
                text: 'Профиль',
                authOnly: true,
            },
            {
                icon: 'articles',
                path: RoutePath.articles,
                text: 'Статьи',
                authOnly: true,
            },
        )
    }
    return sideBarItemsList
})
