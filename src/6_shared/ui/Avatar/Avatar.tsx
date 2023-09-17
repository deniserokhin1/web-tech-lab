import { classNames } from '../../lib/classNames/classNames'
import cls from './Avatar.module.scss'
import { type CSSProperties, memo, useMemo } from 'react'

interface AvatarProps {
    className?: string
    src?: string
    width?: number | string
    height?: number
    size?: number
    alt?: string
    borderRadius?: string
}

export const Avatar = memo(
    ({ className, src, height, width, alt, borderRadius, size }: AvatarProps) => {
        const mods = {}

        const styles = useMemo<CSSProperties>(() => {
            return {
                width: size || width,
                height: size || height,
                borderRadius,
            }
        }, [width, height, borderRadius, size])

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
