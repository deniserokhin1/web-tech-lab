import { type ReactNode, type HTMLAttributes } from 'react'
import { classNames } from '6_shared/lib'
import cls from './Card.module.scss'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children?: ReactNode
}

export const Card = (props: CardProps): JSX.Element => {
    const { className, children, ...otherProps } = props

    const mods = {}

    return (
        <div className={classNames(cls.container, mods, [className])} {...otherProps}>
            {children}
        </div>
    )
}
