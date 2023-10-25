import type { FC } from 'react'

import { classNames } from '@/6_shared/lib'
import { SpinerDots, type SpinerDotsTheme } from '@/6_shared/ui/SpinerDots'

import cls from './PageLoader.module.scss'

interface PageLoaderProps {
    className?: string
    theme?: SpinerDotsTheme
    stateSideBar?: boolean
    big?: boolean
}

export const PageLoader: FC<PageLoaderProps> = (props) => {
    const { className, theme, stateSideBar, big = true } = props

    const mods = {
        [cls.big]: big,
        [cls.open]: stateSideBar,
    }

    return (
        <div className={classNames(cls.container, mods, [className])}>
            <SpinerDots theme={theme} />
        </div>
    )
}
