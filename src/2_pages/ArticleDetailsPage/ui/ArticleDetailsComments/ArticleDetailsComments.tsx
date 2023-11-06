import { Suspense, memo, useCallback } from 'react'

import { useTranslation } from 'react-i18next'

import { useAppDispatch, useAppSelector } from '@/1_app/providers/StoreProvider'
import { AddCommentForm } from '@/4_features/AddNewComment'
import { CommentList } from '@/5_entities/Comment'
import { useInitialEffect } from '@/6_shared/hooks/useInitialEffect'
import { classNames } from '@/6_shared/lib'
import { VStack } from '@/6_shared/ui/Stack'
import { Text, TextAlign } from '@/6_shared/ui/Text'

import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/getArticleDetailsCommentsIsLoading'
import { addCommentForArticle } from '../../model/services/addCommentForArticle'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId'
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice'

import cls from './ArticleDetailsComments.module.scss'

interface ArticleDetailsCommentsProps {
    className?: string
    id?: string
}

const namespace = __IS_DEV__ ? 'translation' : 'article-details'

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
            <Suspense>
                <AddCommentForm onSendComment={onSendComment} />
            </Suspense>
        </VStack>
    )
})
