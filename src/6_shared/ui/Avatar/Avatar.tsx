import { type CSSProperties, memo, useMemo } from 'react'

import { classNames } from '../../lib/classNames/classNames'
import { AppImage } from '../AppImage'
import { Skeleton } from '../Skeleton'

import cls from './Avatar.module.scss'

interface AvatarProps {
    className?: string
    src?: string
    width?: number | string
    height?: number
    size?: number
    alt?: string
    border?: boolean
    borderRadius?: string
}

export const Avatar = memo(
    ({ className, src, height, width, alt, borderRadius, size = 100, border }: AvatarProps) => {
        const mods = {
            [cls.border]: border,
        }

        const styles = useMemo<CSSProperties>(() => {
            return {
                width: size || width,
                height: size || height,
                borderRadius,
            }
        }, [width, height, borderRadius, size])

        const fallback = <Skeleton width={size} height={size} borderRadius="50px" />

        return (
            <AppImage
                fallback={fallback}
                errorFallback={fallback}
                src={src}
                className={classNames(cls.container, mods, [className])}
                style={styles}
                alt={alt}
            />
        )
    },
)
