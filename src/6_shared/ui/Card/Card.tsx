import { type ReactNode, type HTMLAttributes } from 'react'
import { classNames } from '6_shared/lib'
import cls from './Card.module.scss'

export enum CardTheme {
    DEFAULT = 'default',
    OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children?: ReactNode
    theme?: CardTheme
    smallPadding?: boolean
    hover?: boolean
}

export const Card = (props: CardProps): JSX.Element => {
    const { className, children, theme = CardTheme.DEFAULT, smallPadding, hover, ...otherProps } = props

    const mods = {
        [cls.smallPadding]: smallPadding,
        [cls.hover]: hover && theme !== CardTheme.OUTLINED,
    }

    return (
        <div className={classNames(cls.container, mods, [className, cls[theme]])} {...otherProps}>
            {children}
        </div>
    )
}
