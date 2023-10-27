import { createSelector } from '@reduxjs/toolkit'

import { getUserAuthData } from '@/5_entities/User'
import { routePath } from '@/6_shared/const/router'

import { type ISidebarItems } from '../items'

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sideBarItemsList: ISidebarItems[] = [
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
    ]
    if (userData) {
        sideBarItemsList.push(
            {
                icon: 'profile',
                path: routePath.profile(userData.id),
                text: 'Профиль',
                authOnly: true,
            },
            {
                icon: 'articles',
                path: routePath.articles(),
                text: 'Статьи',
                authOnly: true,
            },
        )
    }
    return sideBarItemsList
})
