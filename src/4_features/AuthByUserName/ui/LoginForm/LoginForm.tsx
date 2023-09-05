import { classNames } from '6_shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useCallback, type FC, memo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '6_shared/ui/Button'
import { ButtonTheme } from '6_shared/ui/Button/Button'
import { Input } from '6_shared/ui/Input'
import { getLoginState } from '../../model/selectros/getLoginState'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { loginActions } from '../../model/slice/loginSlice'
import {
    useAppDispatch,
    useAppSelector,
} from '1_app/providers/StoreProvider/config/store'
import { Text, TextTheme } from '6_shared/ui/Text/Text'

interface LoginFrormProps {
    className?: string
}

export const LoginForm: FC<LoginFrormProps> = memo(() => {
    const { t } = useTranslation()

    const dispatch = useAppDispatch()
    const { username, password, isLoading, error } = useAppSelector(getLoginState)
    const { setPassword, setUsername, clearStateAfterCloseModal } = loginActions

    const isEmptyInput = !username || !password
    const tabIndex = isEmptyInput ? -1 : 0

    useEffect(() => {
        return () => {
            dispatch(clearStateAfterCloseModal())
        }
    }, [dispatch, clearStateAfterCloseModal])

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(setUsername(value))
        },
        [dispatch, setUsername],
    )

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(setPassword(value))
        },
        [dispatch, setPassword],
    )

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ password, username }))
    }, [dispatch, password, username])

    return (
        <div className={classNames(cls.container)}>
            <Text title={t('Форма авторизации')} theme={TextTheme.DEFAULT_INVERT} />

            {error && <Text text={error} theme={TextTheme.ERROR} />}

            <Input
                type="text"
                autoFocus={true}
                placeholder={t('Имя пользователя')}
                value={username}
                onChange={onChangeUsername}
            />
            <Input
                type="text"
                placeholder={t('Пароль')}
                value={password}
                onChange={onChangePassword}
            />
            <Button
                theme={ButtonTheme.BACKGROUND_INVERT}
                onClick={onLoginClick}
                disabled={isLoading || isEmptyInput}
                tabIndex={tabIndex}
            >
                {t('Войти')}
            </Button>
        </div>
    )
})
