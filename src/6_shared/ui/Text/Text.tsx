import { ReactNode, memo } from 'react'

import { classNames } from '@/6_shared/lib'

import cls from './Text.module.scss'

export enum TextTheme {
    DEFAULT = 'default',
    DEFAULT_INVERT = 'default_invert',
    DEFAULT_INVERT_PRIMARY = 'default_invert_primary',
    ERROR = 'error',
}

export enum TextAlign {
    RIGHT = 'right',
    CENTER = 'center',
    LEFT = 'left',
}

export enum TextSize {
    S = 'size_s',
    M = 'size_m',
    ML = 'size_ml',
    L = 'size_l',
    LS = 'size_ls',
}

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
    align?: TextAlign
    minWidth?: boolean
    maxWidth?: boolean
    size?: TextSize
    children?: ReactNode
    'data-testid'?: string
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
        maxWidth = false,
        children,
        'data-testid': dataTestId = 'Text',
    } = props

    const mods = { [cls.fitContent]: minWidth, [cls.maxWidth]: maxWidth }

    return (
        <div
            className={classNames(cls.container, mods, [
                className,
                cls[theme],
                cls[size],
            ])}
        >
            {title && (
                <p
                    className={classNames(cls.title, {}, [cls[align]])}
                    data-testid={`${dataTestId}.title`}
                >
                    {title}
                </p>
            )}
            {text && (
                <p
                    className={classNames(cls.text, {}, [cls[align]])}
                    data-testid={`${dataTestId}.text`}
                >
                    {text}
                    {children}
                </p>
            )}
        </div>
    )
})
