import { classNames } from '6_shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '6_shared/ui/Button'
import { ButtonTheme } from '6_shared/ui/Button/Button'
import { Input } from '6_shared/ui/Input'

interface LoginFrormProps {
    className?: string
}

export const LoginForm: FC<LoginFrormProps> = () => {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.container)}>
            <Input type="text" autoFocus={true} placeholder={t('Имя пользователя')} />
            <Input type="text" placeholder={t('Пароль')} />
            <Button theme={ButtonTheme.BACKGROUND_INVERT}>{t('Войти')}</Button>
        </div>
    )
}
