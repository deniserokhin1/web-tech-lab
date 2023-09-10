import cls from './Text.module.scss'
import { memo } from 'react'
import { classNames } from '6_shared/lib'

export enum TextTheme {
    DEFAULT = 'default',
    DEFAULT_INVERT = 'default_invert',
    ERROR = 'error',
}

export enum TextAlign {
    RIGHT = 'right',
    CENTER = 'center',
    LEFT = 'left',
}

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
    align?: TextAlign
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = TextTheme.DEFAULT,
        align = TextAlign.CENTER,
    } = props

    const mods = {}

    return (
        <div className={classNames(cls.container, mods, [className, cls[theme]])}>
            {title && <p className={classNames(cls.title, {}, [cls[align]])}>{title}</p>}
            {text && <p className={classNames(cls.text, {}, [cls[align]])}>{text}</p>}
        </div>
    )
})
