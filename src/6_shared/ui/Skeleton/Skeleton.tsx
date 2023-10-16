import { type CSSProperties, memo } from 'react'
import { classNames } from '@/6_shared/lib'
import cls from './Skeleton.module.scss'

export type TSckeleton = 'long' | 'short'

interface SkeletonProps {
    className?: string
    height?: string | number
    width?: string | number
    borderRadius?: string
    type?: TSckeleton
}

export const Skeleton = memo((props: SkeletonProps) => {
    const { className, borderRadius, height, width, type = 'long' } = props

    const styles: CSSProperties = {
        width,
        height,
        borderRadius,
    }

    const mods = {}

    return (
        <div
            className={classNames(cls.container, mods, [className, cls[type]])}
            style={styles}
        />
    )
})
