import { memo } from 'react'

import { useTranslation } from 'react-i18next'

import { useAppSelector } from '@/1_app/providers/StoreProvider'
import { useTheme } from '@/1_app/providers/ThemeProvider'
import { getUserAuthData } from '@/5_entities/User'
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

    const namespace = __IS_DEV__ ? 'translation' : ''
    const { t } = useTranslation(namespace)

    const { stateSidebar } = useTheme()

    const mods = {
        [cls.open]: stateSidebar,
    }

    const isAuth = useAppSelector(getUserAuthData)

    if (item.authOnly && !isAuth) return null

    return (
        <AppLink
            theme={AppLinkTheme.PRIMARY_INVERT}
            className={classNames(cls.link, mods)}
            to={path}
            animation={true}
            hovered={true}
        >
            <IconComponent name={icon} pathFill={color} />
            <p className={classNames(cls.text)}>{t(text)}</p>
        </AppLink>
    )
})
