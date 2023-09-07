import cls from './SidebarItem.module.scss'
import { memo } from 'react'
import { IconComponent, classNames } from '6_shared/lib'
import { useTranslation } from 'react-i18next'
import { AppLink } from '6_shared/ui/AppLink'
import { AppLinkTheme } from '6_shared/ui/AppLink/AppLink'
import { type ISidebarItems } from '../../model/items'
import { useTheme } from '1_app/providers/ThemeProvider'

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

    return (
        <AppLink
            theme={AppLinkTheme.PRIMARY_INVERT}
            className={classNames(cls.link, mods)}
            to={path}
        >
            <IconComponent name={icon} pathFill={color} />
            <p className={classNames(cls.text)}>{t(text)}</p>
        </AppLink>
    )
})
