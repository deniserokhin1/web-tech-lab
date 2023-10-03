import { useAppDispatch, useAppSelector } from '1_app/providers/StoreProvider'
import { AddCommentForm } from '4_features/AddNewComment'
import { ArticleDetails } from '5_entities/Article'
import { ArticleList } from '5_entities/Article/ui/ArticleList/ArticleList'
import { CommentList } from '5_entities/Comment'
import { useInitialEffect } from '6_shared/hooks/useInitialEffect'
import { classNames } from '6_shared/lib'
import { DynamicModuleLoader, type ReducersList } from '6_shared/lib/components/DynamicModuleLoader'
import { Card } from '6_shared/ui/Card/Card'
import { VStack } from '6_shared/ui/Stack'
import { Text, TextAlign } from '6_shared/ui/Text/Text'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/getArticleDetailsCommentsIsLoading'
import { getArticleRecommendationIsLoading } from '../../model/selectors/recommendations'
import { addCommentForArticle } from '../../model/services/addCommentForArticle'
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId'
import { articleDetailsPageReducer } from '../../model/slice'
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice'
import { getArticleRecommendations } from '../../model/slice/articleDetailsRecomendationsSlice'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import cls from './ArticleDetailsPage.module.scss'

interface ArticleDetailsPageProps {
    className?: string
}

const reducers: ReducersList = {
    articleDeatailsPage: articleDetailsPageReducer,
}

const ArticleDetailsPage = memo((props: ArticleDetailsPageProps) => {
    const { className } = props

    const comments = useAppSelector(getArticleComments.selectAll)
    const recommendations = useAppSelector(getArticleRecommendations.selectAll)
    const commentsIsLoading = useAppSelector(getArticleDetailsCommentsIsLoading)
    const recommendationsIsLoading = useAppSelector(getArticleRecommendationIsLoading)

    const dispatch = useAppDispatch()

    const { id = '1' } = useParams<{ id: string }>()

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id))
        dispatch(fetchArticleRecommendations())
    })

    const namespace = __IS_DEV__ ? 'translation' : 'article-details'
    const { t } = useTranslation(namespace)

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text))
        },
        [dispatch],
    )

    if (!id) {
        return (
            <div className={classNames(cls.container, {}, [className])}>
                {t('article-details.Статья не найдена')}
            </div>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.container, {}, [className])}>
                <ArticleDetailsPageHeader />

                <div className={cls.content}>
                    <Card>
                        <VStack gap="16">
                            <ArticleDetails id={id} />

                            <Text title={t('article-details.Рекомендуем')} align={TextAlign.LEFT} />
                            <ArticleList
                                articles={recommendations}
                                isLoading={recommendationsIsLoading}
                                className={cls.recommendations}
                                target="_blank"
                            />

                            <Text title={t('article-details.Комментарии')} align={TextAlign.LEFT} />

                            <CommentList comments={comments} isLoading={commentsIsLoading} />

                            <AddCommentForm onSendComment={onSendComment} />
                        </VStack>
                    </Card>
                </div>
            </div>
        </DynamicModuleLoader>
    )
})

export default ArticleDetailsPage
