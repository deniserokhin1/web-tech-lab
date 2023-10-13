import { type ReactNode, type HTMLAttributes, useMemo, type CSSProperties } from 'react'
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
    padding?: string | number
    borderRadius?: number
}

export const Card = (props: CardProps): JSX.Element => {
    const {
        className,
        children,
        theme = CardTheme.DEFAULT,
        smallPadding,
        hover,
        padding,
        borderRadius,
        ...otherProps
    } = props

    const mods = {
        [cls.smallPadding]: smallPadding,
        [cls.hover]: hover && theme !== CardTheme.OUTLINED,
    }

    const styles = useMemo<CSSProperties>(() => {
        return {
            padding,
            borderRadius,
        }
    }, [borderRadius, padding])

    return (
        <div
            className={classNames(cls.container, mods, [className, cls[theme]])}
            style={styles}
            {...otherProps}
        >
            {children}
        </div>
    )
}
