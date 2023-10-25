import { classNames } from '@/6_shared/lib'
import { Card } from '@/6_shared/ui/Card'
import { Text, TextAlign, TextSize } from '@/6_shared/ui/Text'
import { type INotification } from '../../model/types/notification'
import cls from './NotificationItem.module.scss'

interface NotificationItemProps {
    className?: string
    item?: INotification
}

export const NotificationItem = (props: NotificationItemProps): JSX.Element => {
    const { className, item } = props

    const mods = {}

    const content = (
        <Card
            className={classNames(cls.container, mods, [className])}
            padding={10}
            borderRadius={4}
        >
            <Text
                title={item?.title}
                text={item?.description}
                align={TextAlign.LEFT}
                size={TextSize.S}
            />
        </Card>
    )

    if (item?.href) {
        return (
            <a target="_blank" rel="noreferrer" href={item.href}>
                {content}
            </a>
        )
    }

    return content
}
