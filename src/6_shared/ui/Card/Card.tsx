import { type ReactNode, memo, type HTMLAttributes } from 'react'
import { classNames } from '6_shared/lib'
import { useTranslation } from 'react-i18next'
import cls from './Card.module.scss'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children?: ReactNode
}

export const Card = memo((props: CardProps) => {
    const { className, children, ...otherProps } = props

    const namespace = __IS_DEV__ ? 'translation' : 'namespace'
    const { t } = useTranslation(namespace)

    const mods = {}

    return (
        <div className={classNames(cls.container, mods, [className])} {...otherProps}>
            {children}
        </div>
    )
})
