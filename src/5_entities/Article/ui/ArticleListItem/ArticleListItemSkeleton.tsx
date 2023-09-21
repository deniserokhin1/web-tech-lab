import { memo } from 'react'
import { classNames } from '6_shared/lib'
import cls from './ArticleListItem.module.scss'
import { ArticleView } from '../../model/types/article'
import { Card } from '6_shared/ui/Card/Card'
import { Skeleton } from '6_shared/ui/Skeleton/Skeleton'

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
                        <Skeleton
                            width={130}
                            height={24}
                            borderRadius="2px"
                            type="short"
                        />
                    </div>
                    <Skeleton width={260} height={36} borderRadius="4px" type="short" />
                    <Skeleton width="100%" height={300} borderRadius="6px" />
                    <Skeleton width={260} height={36} borderRadius="4px" type="short" />
                    <Skeleton width="100%" height={150} borderRadius="6px" />
                </Card>
            </div>
        )
    }

    return (
        <div className={classNames(cls[view], mods, [className])}>
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <Skeleton className={cls.img} />
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton width={130} height={24} borderRadius="2px" />
                </div>
                <Skeleton width={150} height={24} borderRadius="2px" />
            </Card>
        </div>
    )
})
