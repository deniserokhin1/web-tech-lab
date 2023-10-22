import { useAppSelector } from '@/1_app/providers/StoreProvider'
import { Rating } from '@/5_entities/Rating'
import { getUserAuthData } from '@/5_entities/User'
import { classNames } from '@/6_shared/lib/classNames/classNames'
import { Skeleton } from '@/6_shared/ui/Skeleton/Skeleton'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useArticleRating, useRateArticle } from '../../api/articleRatingApi'
import cls from './ArticleRating.module.scss'

const namespace = __IS_DEV__ ? 'translation' : 'namespace'

export interface ArticleRatingProps {
    className?: string
    articleId: string
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const { className, articleId } = props
    const { t } = useTranslation(namespace)
    const userData = useAppSelector(getUserAuthData)

    const { data, isLoading, refetch } = useArticleRating({
        articleId,
        userId: userData?.id ?? '',
    })

    const [rateArticleMutation] = useRateArticle()

    const rating = data?.[0]

    const handleArticleRate = useCallback(
        (starsCount: number, feedback?: string) => {
            try {
                rateArticleMutation({
                    userId: userData?.id ?? '',
                    articleId,
                    rate: starsCount,
                    feedback,
                })
            } catch (e) {
                console.log(e)
            } finally {
                refetch()
            }
        },
        [articleId, rateArticleMutation, refetch, userData?.id],
    )

    const onAccept = useCallback(
        (starsCount: number, feedback?: string) => {
            handleArticleRate(starsCount, feedback)
        },
        [handleArticleRate],
    )

    const onCancel = useCallback(
        (starsCount: number) => {
            handleArticleRate(starsCount)
        },
        [handleArticleRate],
    )

    if (isLoading) {
        return <Skeleton width="100%" height={120} />
    }

    return (
        <Rating
            className={classNames(cls.container, {}, [className])}
            title={t('Оцените статью')}
            feedBackTitle={t('Оставьте отзыв. Это поможет улучшить качество.')}
            rate={rating?.rate}
            onAccept={onAccept}
            onCancel={onCancel}
        />
    )
})

export default ArticleRating
