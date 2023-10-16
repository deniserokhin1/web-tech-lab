import type { FC } from 'react'
import { classNames } from '@/6_shared/lib'

interface UserProps {
    className?: string
}

export const User: FC<UserProps> = (props) => {
    const { className } = props
    const mods = {}

    return <div className={classNames('', mods, [className])} />
}
