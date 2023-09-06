import cls from './PageLoader.module.scss'
import type { FC } from 'react'
import { classNames } from '6_shared/lib'
import { SpinerDots, type SpinerDotsTheme } from '6_shared/ui/SpinerDots/SpinerDots'

interface PageLoaderProps {
    className?: string
    theme?: SpinerDotsTheme
}

export const PageLoader: FC<PageLoaderProps> = (props) => {
    const { className, theme } = props
    const mods = {}

    return (
        <div className={classNames(cls.container, mods, [className])}>
            <SpinerDots theme={theme} />
        </div>
    )
}
