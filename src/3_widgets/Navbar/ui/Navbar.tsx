import cls from './Navbar.module.scss'
import type { FC } from 'react'
import { classNames } from '6_shared/lib'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {

    return (
        <div className={classNames(cls.container)}>
            <div className={cls.links}>
            </div>
        </div>
    )
}
