import { memo } from 'react'
import { classNames } from '6_shared/lib'
import { useTranslation } from 'react-i18next'
import cls from './CommentList.module.scss'
import { type IComment } from '../../model/types/comment'
import { Text, TextAlign } from '6_shared/ui/Text/Text'
import { CommentCard } from '../CommentCard/CommentCard'

interface CommentListProps {
    className?: string
    comments?: IComment[]
    isLoading?: boolean
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, comments, isLoading } = props

    const namespace = __IS_DEV__ ? 'translation' : 'article-details'
    const { t } = useTranslation(namespace)

    const mods = {}

    return (
        <div className={classNames(cls.container, mods, [className])}>
            {comments?.length ? (
                comments.map((comment, index) => (
                    <CommentCard comment={comment} key={index} isLoading={isLoading} />
                ))
            ) : (
                <Text text={t('article-details.Комментарии отсутствуют')} align={TextAlign.LEFT} />
            )}
        </div>
    )
})
