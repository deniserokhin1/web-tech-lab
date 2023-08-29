import cls from './PageError.module.scss'
import type { FC } from 'react'
import { classNames } from '6_shared/lib'
import { useTranslation } from 'react-i18next'
import { Button } from '6_shared/ui/Button'
import { ButtonTheme } from '6_shared/ui/Button/Button'

interface PageErrorProps {
    className?: string
}

export const PageError: FC<PageErrorProps> = (props) => {
    const { className } = props
    const mods = {}

    const namespace = __IS_DEV__ ? 'translation' : ''
    const { t } = useTranslation(namespace)

    const reloadPage = (): void => {
        location.reload()
    }

    return (
        <div className={classNames(cls.container, mods, [className])}>
            <h1>{t('Произошла непредвиденная ошибка')}</h1>

            <Button
                children={t('Обновить страницу')}
                onClick={reloadPage}
                theme={ButtonTheme.BORDER}
                className={cls.offset}
            />
        </div>
    )
}
