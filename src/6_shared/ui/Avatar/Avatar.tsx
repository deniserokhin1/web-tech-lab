import { classNames } from '../../lib/classNames/classNames'
import cls from './Avatar.module.scss'
import { type CSSProperties, memo, useMemo } from 'react'

interface AvatarProps {
    className?: string
    src?: string
    size?: number
    alt?: string
}

export const Avatar = memo(({ className, src, size, alt }: AvatarProps) => {
    const mods = {}

    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size,
            height: size,
        }
    }, [size])

    return (
        <img
            src={src}
            className={classNames(cls.container, mods, [className])}
            style={styles}
            alt={alt}
        />
    )
})
