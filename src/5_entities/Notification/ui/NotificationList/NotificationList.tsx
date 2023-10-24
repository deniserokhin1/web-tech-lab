import { classNames } from '@/6_shared/lib'
import { Skeleton } from '@/6_shared/ui/Skeleton/Skeleton'
import { VStack } from '@/6_shared/ui/Stack'
import { memo, useEffect } from 'react'
import { useNotifications } from '../../api/notificationApi'
import { NotificationItem } from '../NotificationItem/NotificationItem'
import { type INotification } from '../../model/types/notification'

interface NotificationListProps {
    className?: string
    getData?: (data: INotification[]) => void
}

export const NotificationList = memo((props: NotificationListProps) => {
    const { className, getData } = props

    const { data, isLoading } = useNotifications(null, {
        pollingInterval: 10000,
    })

    useEffect(() => {
        if (!data || !getData) return
        getData(data)
    }, [data, getData])

    if (isLoading) {
        return (
            <VStack
                gap="8"
                className={classNames('', {}, [className])}
                max={true}
            >
                <Skeleton borderRadius="4px" width="100%" height={66} />
                <Skeleton borderRadius="4px" width="100%" height={66} />
                <Skeleton borderRadius="4px" width="100%" height={66} />
                <Skeleton borderRadius="4px" width="100%" height={66} />
                <Skeleton borderRadius="4px" width="100%" height={66} />
            </VStack>
        )
    }

    return (
        <VStack gap="8" className={classNames('', {}, [className])} max={true}>
            {data?.map((item) => (
                <NotificationItem key={item.id} item={item} />
            ))}
        </VStack>
    )
})
