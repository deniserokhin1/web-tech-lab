import { memo, useCallback } from 'react'
import { classNames } from '6_shared/lib'
import { useTranslation } from 'react-i18next'
import cls from './ArticleDetailsComments.module.scss'
import { Text, TextAlign } from '6_shared/ui/Text/Text'
import { CommentList } from '5_entities/Comment'
import { AddCommentForm } from '4_features/AddNewComment'
import { useAppDispatch, useAppSelector } from '1_app/providers/StoreProvider'
import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/getArticleDetailsCommentsIsLoading'
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice'
import { addCommentForArticle } from '../../model/services/addCommentForArticle'
import { useInitialEffect } from '6_shared/hooks/useInitialEffect'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId'
import { VStack } from '6_shared/ui/Stack'

interface ArticleDetailsCommentsProps {
    className?: string
    id?: string
}

const namespace = __IS_DEV__ ? 'translation' : 'namespace'

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
    const { className, id } = props
    const { t } = useTranslation(namespace)
    const dispatch = useAppDispatch()

    const comments = useAppSelector(getArticleComments.selectAll)
    const commentsIsLoading = useAppSelector(getArticleDetailsCommentsIsLoading)

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id))
    })

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text))
        },
        [dispatch],
    )

    const mods = {}

    return (
        <VStack gap="16" className={classNames(cls.container, mods, [className])}>
            <Text title={t('article-details.Комментарии')} align={TextAlign.LEFT} />
            <CommentList comments={comments} isLoading={commentsIsLoading} />
            <AddCommentForm onSendComment={onSendComment} />
        </VStack>
    )
})
