import cls from './AppLink.module.scss'
import { type ForwardedRef, forwardRef, type ReactNode } from 'react'
import { classNames } from '@/6_shared/lib'
import { Link, type LinkProps } from 'react-router-dom'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    PRIMARY_INVERT = 'primary_invert',
    SECONDARY_INVERT = 'secondary_invert',
}

interface AppLinkProps extends LinkProps {
    children: ReactNode
    className?: string
    theme?: AppLinkTheme
    animation?: boolean
}

export const AppLink = forwardRef(
    (props: AppLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
        const {
            className,
            children,
            to,
            theme = AppLinkTheme.PRIMARY,
            animation = false,
            ...otherProps
        } = props
        const mods = { [cls.animation]: animation }

        return (
            <Link
                to={to}
                ref={ref}
                className={classNames(cls.container, mods, [className, cls[theme]])}
                children={children}
                {...otherProps}
            />
        )
    },
)
