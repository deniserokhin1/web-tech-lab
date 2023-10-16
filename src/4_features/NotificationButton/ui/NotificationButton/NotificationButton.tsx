import { useAppSelector } from '1_app/providers/StoreProvider'
import {
    getUIBgColor,
    getUIMainColor,
} from '4_features/UI/model/selectors/getUI'
import { NotificationList } from '5_entities/Notification'
import { type INotification } from '5_entities/Notification/model/types/notification'
import { useDevice } from '6_shared/hooks/useDevice'
import { IconComponent } from '6_shared/lib'
import { Button } from '6_shared/ui/Button'
import { ButtonTheme } from '6_shared/ui/Button/Button'
import { Drawer } from '6_shared/ui/Drawer/Drawer'
import { NotificationBadge } from '6_shared/ui/NotificationBadge/NotificationBadge'
import { Popover } from '6_shared/ui/Popups'
import { memo, useCallback, useState } from 'react'
import cls from './NotificationButton.module.scss'
import { AnimationProvider } from '6_shared/lib/components/AnimationProvider'

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props
    const bgColor = useAppSelector(getUIBgColor)
    const [isOpen, setOpen] = useState(false)
    const [amount, setAmount] = useState(0)
    const color = useAppSelector(getUIMainColor)

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
                <AnimationProvider>
                    {trigger}
                    <Drawer isOpen={isOpen} onClose={onToggle} color={color}>
                        <NotificationList getData={getAmount} />
                    </Drawer>
                </AnimationProvider>
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
