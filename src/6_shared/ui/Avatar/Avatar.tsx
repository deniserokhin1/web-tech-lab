import { classNames } from '../../lib/classNames/classNames'
import cls from './Avatar.module.scss'
import { type CSSProperties, memo, useMemo } from 'react'

interface AvatarProps {
    className?: string
    src?: string
    width?: number
    height?: number
    alt?: string
    borderRadius?: string
}

export const Avatar = memo(
    ({ className, src, height, width, alt, borderRadius }: AvatarProps) => {
        const mods = {}

        const styles = useMemo<CSSProperties>(() => {
            return {
                width,
                height,
                borderRadius,
            }
        }, [width, height, borderRadius])

        return (
            <img
                src={src}
                className={classNames(cls.container, mods, [className])}
                style={styles}
                alt={alt}
            />
        )
    },
)
