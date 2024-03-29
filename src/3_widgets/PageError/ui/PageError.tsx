import type { FC } from 'react'

import { useTranslation } from 'react-i18next'

import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
} from '@/1_app/providers/ThemeProvider/lib/ThemeContext'
import { classNames } from '@/6_shared/lib'
import { Button, ButtonTheme } from '@/6_shared/ui/Button'

import cls from './PageError.module.scss'

interface PageErrorProps {
    className?: string
    isDev?: boolean
}

export const PageError: FC<PageErrorProps> = (props) => {
    const { className, isDev = __IS_DEV__ } = props
    const mods = {}

    const namespace = isDev ? 'translation' : ''
    const { t } = useTranslation(namespace)

    const reloadPage = (): void => {
        location.reload()
    }

    const theme =
        (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

    return (
        <div className={classNames(cls.container, mods, [className, theme])}>
            <h1 className={cls.title}>
                {t('Произошла непредвиденная ошибка')}
            </h1>

            <Button
                children={t('Обновить страницу')}
                onClick={reloadPage}
                theme={ButtonTheme.OUTLINE}
                className={cls.offset}
            />
        </div>
    )
}
