import { memo, useCallback, useRef } from 'react'
import { IconComponent, classNames } from '6_shared/lib'
import { useTranslation } from 'react-i18next'
import cls from './ArticleDetailsPage.module.scss'
import { ArticleDetails } from '5_entities/Article'
import { useNavigate, useParams } from 'react-router-dom'
import { Text, TextAlign } from '6_shared/ui/Text/Text'
import { CommentList } from '5_entities/Comment'
import {
    DynamicModuleLoader,
    type ReducersList,
} from '6_shared/lib/components/DynamicModuleLoader'
import {
    articleDetailsCommentsReducer,
    getArticleComments,
} from '../../model/slice/articleDetailsCommentsSlice'
import { useAppDispatch, useAppSelector } from '1_app/providers/StoreProvider'
import { useInitialEffect } from '6_shared/hooks/useInitialEffect'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId'
import { AddCommentForm } from '4_features/AddNewComment'
import { addCommentForArticle } from '../../model/services/addCommentForArticle'
import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/getArticleDetailsCommentsIsLoading'
import { Card } from '6_shared/ui/Card/Card'
import { Button } from '6_shared/ui/Button'
import { RoutePath } from '1_app/providers/Router/config/routeConfig'
import { useGetMainColor } from '6_shared/hooks/useGetMainColor'

interface ArticleDetailsPageProps {
    className?: string
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
}

const ArticleDetailsPage = memo((props: ArticleDetailsPageProps) => {
    const { className } = props
    const comments = useAppSelector(getArticleComments.selectAll)
    const commentsIsLoading = useAppSelector(getArticleDetailsCommentsIsLoading)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { id = '1' } = useParams<{ id: string }>()
    const ref = useRef<HTMLDivElement>(null)

    const namespace = __IS_DEV__ ? 'translation' : 'article-details'
    const { t } = useTranslation(namespace)

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles)
    }, [navigate])

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id))
    })

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text))
        },
        [dispatch],
    )

    const color = useGetMainColor(ref, '--primary-color')

    if (!id) {
        return (
            <div className={classNames(cls.container, {}, [className])}>
                {t('article-details.Статья не найдена')}
            </div>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.container, {}, [className])} ref={ref}>
                <Button onClick={onBackToList} className={cls.backButton}>
                    <IconComponent name="back" pathFill={color} />
                </Button>

                <div className={cls.content}>
                    <Card>
                        <ArticleDetails id={id} />

                        <Text
                            title={t('article-details.Комментарии')}
                            align={TextAlign.LEFT}
                            className={cls.commentTitle}
                        />

                        <CommentList comments={comments} isLoading={commentsIsLoading} />

                        <AddCommentForm
                            onSendComment={onSendComment}
                            className={cls.marginAddComment}
                        />
                    </Card>
                </div>
            </div>
        </DynamicModuleLoader>
    )
})

export default ArticleDetailsPage
