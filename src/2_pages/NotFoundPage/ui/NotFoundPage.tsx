import { memo } from 'react'

import { useTranslation } from 'react-i18next'

import { classNames } from '@/6_shared/lib'

import cls from './NotFoundPage.module.scss'

interface NotFoundPageProps {
    className?: string
    isDev?: boolean
}

export const NotFoundPage = memo((props: NotFoundPageProps) => {
    const { className, isDev = __IS_DEV__ } = props
    const mods = {}

    const namespace = isDev ? 'translation' : 'namespace'
    const { t } = useTranslation(namespace)

    return (
        <div className={classNames(cls.container, mods, [className])}>
            {t('Страница не найдена')}
        </div>
    )
})
