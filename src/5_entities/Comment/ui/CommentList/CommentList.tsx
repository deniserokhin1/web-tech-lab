import { memo } from 'react'

import { useTranslation } from 'react-i18next'

import { VStack } from '@/6_shared/ui/Stack'
import { Text, TextAlign } from '@/6_shared/ui/Text'

import { type IComment } from '../../model/types/comment'
import { CommentCard } from '../CommentCard/CommentCard'

interface CommentListProps {
    className?: string
    comments?: IComment[]
    isLoading?: boolean
}

export const CommentList = memo((props: CommentListProps) => {
    const { comments, isLoading } = props

    const namespace = __IS_DEV__ ? 'translation' : 'article-details'
    const { t } = useTranslation(namespace)

    return (
        <VStack gap="8" max={true}>
            {comments?.length ? (
                comments.map((comment, index) => (
                    <CommentCard comment={comment} key={index} isLoading={isLoading} />
                ))
            ) : (
                <Text text={t('Комментарии отсутствуют')} align={TextAlign.LEFT} />
            )}
        </VStack>
    )
})
