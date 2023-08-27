import cls from './AppLink.module.scss'
import type { FC, ReactNode } from 'react'
import { classNames } from '6_shared/lib'
import { Link, type LinkProps } from 'react-router-dom'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    children: ReactNode
    className?: string
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const { className, children, to, theme = AppLinkTheme.PRIMARY, ...otherProps } = props
    const mods = {}

    return (
        <Link
            to={to}
            className={classNames('', mods, [className, cls[theme]])}
            children={children}
            {...otherProps}
        />
    )
}
