import cls from './Button.module.scss'
import type { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import { classNames } from '6_shared/lib'

export enum ButtonTheme {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    children: ReactNode
}

export const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme = ButtonTheme.CLEAR, ...otherProps } = props
    const mods = {}

    return (
        <button
            className={classNames(cls.container, mods, [className, cls[theme]])}
            {...otherProps}
            children={children}
        />
    )
}
