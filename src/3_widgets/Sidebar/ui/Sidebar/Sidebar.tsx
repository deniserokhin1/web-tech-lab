import { memo, useRef } from 'react'

import { useAppSelector } from '@/1_app/providers/StoreProvider'
import { useTheme } from '@/1_app/providers/ThemeProvider'
import { LangSwitcher } from '@/3_widgets/LangSwitcher'
import { ThemeSwitcher } from '@/3_widgets/ThemeSwitcher'
import { IconComponent, classNames } from '@/6_shared/lib'
import { Button } from '@/6_shared/ui/Button'
import { VStack } from '@/6_shared/ui/Stack'

import { getSidebarItems } from '../../model/selectors/getSidebarItems'
import { SidebarItem } from '../SidebarItem/SidebarItem'

import cls from './Sidebar.module.scss'

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
        <div className={classNames(cls.container, mods, [className])} data-testid="sidebar" ref={ref}>
            <Button className={cls.toggle} onClick={toggleSidebar} data-testid="sidebar-toggle">
                <IconComponent name="burger" pathFill={color} />
            </Button>

            <VStack className={cls.links}>
                {sideBarItemsList.map((i, index) => (
                    <SidebarItem item={i} key={i.text + index} color={color} />
                ))}
            </VStack>

            <div className={cls.switchers}>
                <LangSwitcher />
                <ThemeSwitcher mainColor={color} />
            </div>
        </div>
    )
})
