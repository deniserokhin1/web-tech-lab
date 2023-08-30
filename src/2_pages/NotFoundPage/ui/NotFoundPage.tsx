import cls from './NotFoundPage.module.scss'
import type { FC } from 'react'
import { classNames } from '6_shared/lib'
import { useTranslation } from 'react-i18next'

interface NotFoundPageProps {
    className?: string
    isDev?: boolean
}

export const NotFoundPage: FC<NotFoundPageProps> = (props) => {
    const { className, isDev = __IS_DEV__ } = props
    const mods = {}

    const namespace = isDev ? 'translation' : 'namespace'
    const { t } = useTranslation(namespace)

    return <div className={classNames(cls.container, mods, [className])}>
        {t('Страница не найдена')}
    </div>
}