import { classNames } from '6_shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useCallback, type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '6_shared/ui/Button'
import { ButtonTheme } from '6_shared/ui/Button/Button'
import { Input } from '6_shared/ui/Input'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { useAppDispatch, useAppSelector } from '1_app/providers/StoreProvider'
import { Text, TextTheme } from '6_shared/ui/Text/Text'
import { getLoginUsername } from '../../model/selectros/getLoginUsername'
import { getLoginPassword } from '../../model/selectros/getLoginPassword'
import { getLoginIsLoading } from '../../model/selectros/getLoginIsLoading'
import { getLoginError } from '../../model/selectros/getLoginError'
import {
    DynamicModuleLoader,
    type ReducersList,
} from '6_shared/lib/components/DynamicModuleLoader'

const initialReducers: ReducersList = {
    login: loginReducer,
}

export interface LoginFrormProps {
    className?: string
}

const LoginForm: FC<LoginFrormProps> = memo(() => {
    const { t } = useTranslation()

    const dispatch = useAppDispatch()
    const { setPassword, setUsername } = loginActions

    const username = useAppSelector(getLoginUsername)
    const password = useAppSelector(getLoginPassword)
    const isLoading = useAppSelector(getLoginIsLoading)
    const error = useAppSelector(getLoginError)

    const isEmptyInput = !username || !password
    const tabIndex = isEmptyInput ? -1 : 0

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
        if (!password || !username) return
        dispatch(loginByUsername({ password, username }))
    }, [dispatch, password, username])

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div className={classNames(cls.container)}>
                <Text title={t('Форма авторизации')} theme={TextTheme.DEFAULT_INVERT} />

                {error && <Text text={error} theme={TextTheme.ERROR} />}

                <Input
                    type="text"
                    autoFocus={true}
                    placeholder={t('Имя пользователя')}
                    value={username}
                    onChange={onChangeUsername}
                    className={cls.border}
                />
                <Input
                    type="text"
                    placeholder={t('Пароль')}
                    value={password}
                    onChange={onChangePassword}
                    className={cls.border}
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
        </DynamicModuleLoader>
    )
})

export default LoginForm
