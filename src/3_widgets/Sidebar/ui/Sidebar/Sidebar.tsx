import cls from './Sidebar.module.scss'
import { type FC } from 'react'
import { IconComponent, classNames } from '6_shared/lib'
import { Button } from '6_shared/ui/Button'
import { ThemeSwitcher } from '3_widgets/ThemeSwitcher'
import { LangSwitcher } from '3_widgets/LangSwitcher/ui/LangSwitcher'
import { useTheme } from '1_app/providers/ThemeProvider'
import { AppLink } from '6_shared/ui/AppLink'
import { AppLinkTheme } from '6_shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { RoutePath } from '1_app/providers/Router/config/routeConfig'

export interface SidebarProps {
    className?: string
    color?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const { className, color } = props
    const { stateSidebar, toggleSidebar } = useTheme()

    const { t } = useTranslation()

    const mods = {
        [cls.open]: stateSidebar,
    }

    return (
        <div
            className={classNames(cls.container, mods, [className])}
            data-testid="sidebar"
        >
            <Button
                className={cls.toggle}
                onClick={toggleSidebar}
                data-testid="sidebar-toggle"
            >
                <IconComponent name="burger" pathFill={color} />
            </Button>

            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.PRIMARY_INVERT}
                    className={cls.link}
                    to={RoutePath.main}
                >
                    <IconComponent name="home" pathFill={color} />
                    <p className={classNames(cls.text)}>{t('Главная')}</p>
                </AppLink>

                <AppLink
                    theme={AppLinkTheme.PRIMARY_INVERT}
                    className={cls.link}
                    to={RoutePath.about}
                >
                    <IconComponent name="info" pathFill={color} />
                    <p className={classNames(cls.text)}>{t('О проекте')}</p>
                </AppLink>
            </div>

            <div className={cls.switchers}>
                <ThemeSwitcher mainColor={color} />
                <LangSwitcher />
            </div>
        </div>
    )
}
