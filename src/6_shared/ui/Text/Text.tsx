import cls from './Text.module.scss'
import type { FC } from 'react'
import { classNames } from '6_shared/lib'

export enum TextTheme {
    DEFAULT = 'default',
    DEFAULT_INVERT = 'default_invert',
    ERROR = 'error',
}

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
}

export const Text: FC<TextProps> = (props) => {
    const { className, text, title, theme = TextTheme.DEFAULT } = props
    const mods = {}

    return (
        <div className={classNames(cls.container, mods, [className, cls[theme]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    )
}
