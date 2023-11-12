import { useEffect, type FC, useState } from 'react'

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
    const [show, setShow] = useState(false)

    useEffect(() => {
        setShow(true)
    }, [])

    const mods = {
        [cls.big]: big,
        [cls.open]: stateSideBar,
        [cls.show]: show,
    }

    return (
        <div className={classNames(cls.container, mods, [className])}>
            <SpinerDots theme={theme} />
        </div>
    )
}
