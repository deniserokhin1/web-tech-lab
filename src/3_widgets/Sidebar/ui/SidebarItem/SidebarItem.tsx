import { memo, useCallback } from 'react'

import { useTranslation } from 'react-i18next'

import { useAppSelector } from '@/1_app/providers/StoreProvider'
import { useTheme } from '@/1_app/providers/ThemeProvider'
import { About } from '@/2_pages/About'
import { ArticlesPage } from '@/2_pages/ArticlesPage'
import { Main } from '@/2_pages/Main'
import { ProfilePage } from '@/2_pages/ProfilePage'
import { getUserAuthData } from '@/5_entities/User'
import i18n from '@/6_shared/config/i18n/i18n'
import { IconComponent, classNames } from '@/6_shared/lib'
import { AppLink, AppLinkTheme } from '@/6_shared/ui/AppLink'

import { type ISidebarItems } from '../../model/items'

import cls from './SidebarItem.module.scss'

interface SidebarItemProps {
    className?: string
    item: ISidebarItems
    color?: string
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const { color, item } = props
    const { icon, path, text } = item

    const { t } = useTranslation()

    const isAuth = useAppSelector(getUserAuthData)
    const { stateSidebar } = useTheme()

    const preload = useCallback(
        (path: string) => () => {
            if (path.includes('articles')) {
                ArticlesPage.preload()
                i18n.loadNamespaces('articles')
            }
            if (path.includes('profile')) {
                ProfilePage.preload()
                i18n.loadNamespaces('profile')
            }
            if (path.includes('about')) {
                About.preload()
                i18n.loadNamespaces('about')
            }
            if (path === '/') {
                Main.preload()
                i18n.loadNamespaces('')
            }
        },
        [],
    )

    const mods = {
        [cls.open]: stateSidebar,
    }

    if (item.authOnly && !isAuth) return null

    return (
        <AppLink
            theme={AppLinkTheme.PRIMARY_INVERT}
            className={classNames(cls.link, mods)}
            to={path}
            animation={true}
            hovered={true}
            onMouseEnter={preload(path)}
        >
            <IconComponent name={icon} pathFill={color} />
            <p className={classNames(cls.text)}>{t(text)}</p>
        </AppLink>
    )
})
