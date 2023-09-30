// import cls from './User.module.scss'
import type { FC } from 'react'
import { classNames } from '6_shared/lib'
// import { useTranslation } from 'react-i18next'

interface UserProps {
    className?: string
}

export const User: FC<UserProps> = (props) => {
    const { className } = props
    const mods = {}

    // const namespace = !__IS_DEV__ ? 'translation' : 'namespace'
    // const { t } = useTranslation(namespace)

    return <div className={classNames('', mods, [className])}></div>
}
