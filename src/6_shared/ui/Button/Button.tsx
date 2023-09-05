import cls from './Button.module.scss'
import type { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import { classNames } from '6_shared/lib'

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERT = 'clear_invert',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERT = 'background_invert',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    children: ReactNode
    size?: ButtonSize
    disabled?: boolean
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme = ButtonTheme.CLEAR,
        size = ButtonSize.M,
        disabled,
        ...otherProps
    } = props

    const mods = {
        [cls.disabled]: disabled,
    }

    return (
        <button
            disabled={disabled}
            className={classNames(cls.container, mods, [
                className,
                cls[theme],
                cls[size],
            ])}
            {...otherProps}
            children={children}
        />
    )
}
