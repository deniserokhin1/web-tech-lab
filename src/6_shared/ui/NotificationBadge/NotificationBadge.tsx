import { memo } from 'react'
import { classNames } from '6_shared/lib'
import cls from './NotificationBadge.module.scss'

interface NotificationBadgeProps {
    className?: string
    amount?: number
}

export const NotificationBadge = memo((props: NotificationBadgeProps) => {
    const { className, amount } = props

    if (!amount) return null

    const mods = {}

    return <div className={classNames(cls.container, mods, [className])}>{amount}</div>
})
