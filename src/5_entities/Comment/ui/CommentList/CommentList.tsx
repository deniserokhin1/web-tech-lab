import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { type IComment } from '../../model/types/comment'
import { Text, TextAlign } from '6_shared/ui/Text/Text'
import { CommentCard } from '../CommentCard/CommentCard'
import { VStack } from '6_shared/ui/Stack'

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
                <Text text={t('article-details.Комментарии отсутствуют')} align={TextAlign.LEFT} />
            )}
        </VStack>
    )
})
