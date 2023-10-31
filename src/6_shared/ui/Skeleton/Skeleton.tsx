import { type CSSProperties, memo } from 'react'

import { classNames } from '@/6_shared/lib'

import cls from './Skeleton.module.scss'

export type TSckeleton = 'long' | 'short'

interface SkeletonProps {
    className?: string
    height?: string | number
    width?: string | number
    minHeight?: string | number
    borderRadius?: string | number
    type?: TSckeleton
}

export const Skeleton = memo((props: SkeletonProps) => {
    const { className, borderRadius, height, width, minHeight, type = 'long' } = props

    const styles: CSSProperties = {
        width,
        height,
        minHeight,
        borderRadius,
    }

    const mods = {}

    return (
        <div className={classNames(cls.container, mods, [className, cls[type]])} style={styles} />
    )
})
