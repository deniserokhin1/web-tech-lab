import { memo } from 'react'

import { classNames } from '../../lib/classNames/classNames'
import { AppImage } from '../AppImage'
import { Skeleton } from '../Skeleton'

import cls from './Avatar.module.scss'

interface AvatarProps {
    className?: string
    src?: string
    alt?: string
    border?: boolean
    small?: boolean
}

export const Avatar = memo(({ className, src, alt, border, small }: AvatarProps) => {
    const mods = {
        [cls.border]: border,
        [cls.small]: small,
    }

    const fallback = <Skeleton className={classNames(cls.container, mods, [className])} />

    return (
        <AppImage
            fallback={fallback}
            errorFallback={fallback}
            src={src}
            className={classNames(cls.container, mods, [className])}
            alt={alt}
        />
    )
})
