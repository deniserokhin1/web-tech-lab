import { memo } from 'react'

import { classNames } from '@/6_shared/lib'
import { Card } from '@/6_shared/ui/Card'
import { Skeleton } from '@/6_shared/ui/Skeleton'

import { ArticleView } from '../../model/types/article'

import cls from './ArticleListItem.module.scss'

interface ArticleListItemSkeletonProps {
    className?: string
    view?: ArticleView
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
    const { className, view = ArticleView.ROW } = props

    const mods = {}

    if (view === ArticleView.ROW) {
        return (
            <div className={classNames(cls[view], mods, [className])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Skeleton width={130} height={24} borderRadius={4} type="short" />
                    </div>
                    <Skeleton width={260} height={40} borderRadius={4} type="short" />
                    <Skeleton width={260} height={30} borderRadius={4} type="short" />
                    <Skeleton width="100%" className={cls.img} />
                    <Skeleton width={260} height={40} borderRadius={4} type="short" />
                    <Skeleton width="100%" height={150} borderRadius={6} />
                </Card>
            </div>
        )
    }

    return (
        <div className={classNames(cls[view], mods, [className])}>
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <Skeleton className={cls.img} type="short" />
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton width={130} className={cls.title} borderRadius={2} type="short" />
                </div>
                <Skeleton width={150} className={cls.title} borderRadius={2} type="short" />
            </Card>
        </div>
    )
})
