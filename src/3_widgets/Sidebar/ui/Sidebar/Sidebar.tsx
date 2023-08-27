import cls from './Sidebar.module.scss'
import { useState, type FC } from 'react'
import { IconComponent, classNames } from '6_shared/lib'
import { Button } from '6_shared/ui/Button'
import { ThemeSwitcher } from '3_widgets/ThemeSwitcher'
import { LangSwitcher } from '3_widgets/LangSwitcher/ui/LangSwitcher'

interface SidebarProps {
    className?: string
    color: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const { className, color } = props
    const [isOpen, setIsOpen] = useState(true)
    const mods = {
        [cls.open]: isOpen,
    }

    const toggle = (): void => setIsOpen((prev) => !prev)

    return (
        <div className={classNames(cls.container, mods, [className])}>
            <Button className={cls.toggle} onClick={toggle}>
                <IconComponent name="burger" pathFill={color} />
            </Button>

            <div className={cls.switchers}>
                <ThemeSwitcher mainColor={color} />
                <LangSwitcher />
            </div>
        </div>
    )
}
