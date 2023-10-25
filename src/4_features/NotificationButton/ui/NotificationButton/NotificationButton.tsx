import { memo, useCallback, useState } from 'react'

import { useAppSelector } from '@/1_app/providers/StoreProvider'
import { getUIBgColor } from '@/4_features/UI'
import { NotificationList } from '@/5_entities/Notification'
import { type INotification } from '@/5_entities/Notification'
import { useDetectDevice } from '@/6_shared/hooks/useDetectDevice'
import { IconComponent } from '@/6_shared/lib'
import { Button, ButtonTheme } from '@/6_shared/ui/Button'
import { Drawer } from '@/6_shared/ui/Drawer'
import { NotificationBadge } from '@/6_shared/ui/NotificationBadge'
import { Popover } from '@/6_shared/ui/Popups'

import cls from './NotificationButton.module.scss'

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

    const isMobile = useDetectDevice()

    return (
        <>
            {isMobile && (
                <>
                    {trigger}
                    <Drawer isOpen={isOpen} onClose={onToggle}>
                        <NotificationList
                            getData={getAmount}
                            className={cls.drawerNotifications}
                        />
                    </Drawer>
                </>
            )}

            {!isMobile && (
                <Popover
                    trigger={trigger}
                    className={className}
                    direciotn="right"
                >
                    <NotificationList
                        className={cls.notifications}
                        getData={getAmount}
                    />
                </Popover>
            )}
        </>
    )
})
