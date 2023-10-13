import { useAppSelector } from '1_app/providers/StoreProvider'
import { getUIBgColor } from '4_features/UI/model/selectors/getUI'
import { NotificationList } from '5_entities/Notification'
import { IconComponent } from '6_shared/lib'
import { Button } from '6_shared/ui/Button'
import { ButtonTheme } from '6_shared/ui/Button/Button'
import { Drawer } from '6_shared/ui/Drawer/Drawer'
import { Popover } from '6_shared/ui/Popups'
import { memo, useCallback, useState } from 'react'
import cls from './NotificationButton.module.scss'
import { useDevice } from '6_shared/hooks/useDevice'
import { NotificationBadge } from '6_shared/ui/NotificationBadge/NotificationBadge'
import { type INotification } from '5_entities/Notification/model/types/notification'

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props
    const bgColor = useAppSelector(getUIBgColor)
    const [isOpen, setOpen] = useState(false)
    const [amount, setAmount] = useState(0)

    const getAmount = useCallback((data: INotification[]) => {
        setAmount(data.length)
    }, [])

    const onToggle = useCallback(() => {
        setOpen((prev) => !prev)
    }, [])

    const trigger = (
        <Button theme={ButtonTheme.CLEAR} onClick={onToggle}>
            <NotificationBadge amount={amount} className={cls.badge} />
            <IconComponent name="notifications" pathFill={bgColor} />
        </Button>
    )

    const isMobile = useDevice()

    return (
        <>
            {isMobile && (
                <>
                    {trigger}
                    <Drawer isOpen={isOpen} onClose={onToggle}>
                        <NotificationList getData={getAmount} />
                    </Drawer>
                </>
            )}

            {!isMobile && (
                <Popover trigger={trigger} className={className} direciotn="right">
                    <NotificationList className={cls.notifications} getData={getAmount} />
                </Popover>
            )}
        </>
    )
})
