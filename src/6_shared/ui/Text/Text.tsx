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

export enum TextSize {
    M = 'size_m',
    L = 'size_l',
}

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
    align?: TextAlign
    minWidth?: boolean
    size?: TextSize
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        size = TextSize.M,
        theme = TextTheme.DEFAULT,
        align = TextAlign.CENTER,
        minWidth = false,
    } = props

    const mods = { [cls.fitContent]: minWidth }

    return (
        <div
            className={classNames(cls.container, mods, [
                className,
                cls[theme],
                cls[size],
            ])}
        >
            {title && <p className={classNames(cls.title, {}, [cls[align]])}>{title}</p>}
            {text && (
                <p
                    dangerouslySetInnerHTML={{ __html: text }}
                    className={classNames(cls.text, {}, [cls[align]])}
                />
            )}
        </div>
    )
})
