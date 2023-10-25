import { memo } from 'react'
import { classNames } from '@/6_shared/lib'
import cls from './CommentCard.module.scss'
import { type IComment } from '../../model/types/comment'
import { Text, TextAlign, TextSize } from '@/6_shared/ui/Text'
import { Avatar } from '@/6_shared/ui/Avatar'
import { Skeleton } from '@/6_shared/ui/Skeleton'
import { AppLink } from '@/6_shared/ui/AppLink'
import { RoutePath } from '@/1_app/providers/Router/config/routeConfig'
import { Card } from '@/6_shared/ui/Card'

interface CommentCardProps {
    className?: string
    comment?: IComment
    isLoading?: boolean
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props

    if (!comment) return null

    const { text, user } = comment

    const mods = {
        [cls.noBorder]: isLoading,
    }

    if (isLoading) {
        return (
            <div className={classNames(cls.container, mods, [className])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} borderRadius="50%" type="short" />
                    <Skeleton
                        width={100}
                        height={32}
                        borderRadius="6px"
                        type="short"
                        className={cls.username}
                    />
                </div>
                <Skeleton width="100%" height={50} borderRadius="6px" />
            </div>
        )
    }

    return (
        <Card className={classNames(cls.container, mods, [className])}>
            <AppLink to={`${RoutePath.profile}${user.id}`} className={cls.header}>
                {user?.avatar && <Avatar size={30} src={user.avatar} />}

                <Text title={user?.username} className={cls.username} size={TextSize.S} />
            </AppLink>

            <Text text={text} align={TextAlign.LEFT} />
        </Card>
    )
})
