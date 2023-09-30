import cls from './Sidebar.module.scss'
import { memo, useRef } from 'react'
import { IconComponent, classNames } from '6_shared/lib'
import { Button } from '6_shared/ui/Button'
import { ThemeSwitcher } from '3_widgets/ThemeSwitcher'
import { LangSwitcher } from '3_widgets/LangSwitcher/ui/LangSwitcher'
import { useTheme } from '1_app/providers/ThemeProvider'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { useAppSelector } from '1_app/providers/StoreProvider'
import { getSidebarItems } from '3_widgets/Sidebar/model/selectors/getSidebarItems'

export interface SidebarProps {
    className?: string
    color?: string
}

export const Sidebar = memo((props: SidebarProps) => {
    const { className, color } = props
    const { stateSidebar, toggleSidebar } = useTheme()
    const sideBarItemsList = useAppSelector(getSidebarItems)
    const ref = useRef<HTMLDivElement>(null)

    const mods = {
        [cls.open]: stateSidebar,
    }

    return (
        <div
            className={classNames(cls.container, mods, [className])}
            data-testid="sidebar"
            ref={ref}
        >
            <Button
                className={cls.toggle}
                onClick={toggleSidebar}
                data-testid="sidebar-toggle"
            >
                <IconComponent name="burger" pathFill={color} />
            </Button>

            <div className={classNames(cls.links)}>
                {sideBarItemsList.map((i, index) => (
                    <SidebarItem item={i} key={i.text + index} color={color} />
                ))}
            </div>

            <div className={cls.switchers}>
                <LangSwitcher />
                <ThemeSwitcher mainColor={color} />
            </div>
        </div>
    )
})
