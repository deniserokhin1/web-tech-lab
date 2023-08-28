import cls from './PageLoader.module.scss'
import type { FC } from 'react'
import { classNames } from '6_shared/lib'
import { SpinerDots } from '6_shared/ui/SpinerDots/SpinerDots'

interface PageLoaderProps {
    className?: string
}

export const PageLoader: FC<PageLoaderProps> = (props) => {
    const { className } = props
    const mods = {}

    return (
        <div className={classNames(cls.container, mods, [className])}>
            <SpinerDots />
        </div>
    )
}
