import cls from './Profile.module.scss'
import type { FC } from 'react'
import { classNames } from '6_shared/lib'
import { useTranslation } from 'react-i18next'

interface ProfileProps {
    className?: string
}

export const Profile: FC<ProfileProps> = (props) => {
    const { className } = props
    const mods = {}

    const namespace = __IS_DEV__ ? 'translation' : 'namespace'
    const { t } = useTranslation(namespace)

    return <div className={classNames(cls.container, mods, [className])}></div>
}