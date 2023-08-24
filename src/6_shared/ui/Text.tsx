import cls from './Text.module.scss'
import type { FC } from 'react'
import { classNames } from '6_shared/lib'

interface TextProps {
    className: string
}

export const Text: FC<TextProps> = (props) => {
    const { className } = props
    const mods = {}

    return <div className={classNames(cls.container, mods, [className])}></div>
}
