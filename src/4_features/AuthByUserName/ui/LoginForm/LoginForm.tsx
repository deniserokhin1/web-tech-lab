import { useCallback, type FC, memo, useEffect } from 'react'

import { useTranslation } from 'react-i18next'

import { useAppDispatch, useAppSelector } from '@/1_app/providers/StoreProvider'
import { classNames } from '@/6_shared/lib/classNames/classNames'
import {
    DynamicModuleLoader,
    type ReducersList,
} from '@/6_shared/lib/components/DynamicModuleLoader'
import { Button, ButtonTheme } from '@/6_shared/ui/Button'
import { Input } from '@/6_shared/ui/Input'
import { HStack } from '@/6_shared/ui/Stack'
import { Text, TextAlign, TextTheme } from '@/6_shared/ui/Text'

import { getLoginError } from '../../model/selectros/getLoginError'
import { getLoginIsLoading } from '../../model/selectros/getLoginIsLoading'
import { getLoginPassword } from '../../model/selectros/getLoginPassword'
import { getLoginUsername } from '../../model/selectros/getLoginUsername'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { statusCode } from '../../model/types/statusCode'

import cls from './LoginForm.module.scss'

const initialReducers: ReducersList = {
    login: loginReducer,
}

export interface LoginFrormProps {
    className?: string
}

const LoginForm: FC<LoginFrormProps> = memo(() => {
    const { t } = useTranslation()

    const dispatch = useAppDispatch()
    const { setPassword, setUsername, setError } = loginActions

    const username = useAppSelector(getLoginUsername)
    const password = useAppSelector(getLoginPassword)
    const isLoading = useAppSelector(getLoginIsLoading)
    const error = useAppSelector(getLoginError)

    const isEmptyInput = !username || !password
    const isAllEmptyInputs = !username && !password
    const tabIndex = isEmptyInput ? -1 : 0

    useEffect(() => {
        if (isAllEmptyInputs) dispatch(setError())
    }, [dispatch, isAllEmptyInputs, setError])

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

    const mods = {
        [cls.noerror]: !error || (isAllEmptyInputs && !!error),
    }

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div className={classNames(cls.container)}>
                <Text
                    title={t('Форма авторизации')}
                    theme={TextTheme.DEFAULT_INVERT}
                />

                <HStack
                    className={classNames(cls.errorContainer, mods)}
                    justify="center"
                    align="center"
                >
                    {typeof error === 'string' && (
                        <Text text={error} theme={TextTheme.ERROR} />
                    )}
                    {typeof error === 'number' && (
                        <Text
                            text={t(error.toString())}
                            theme={TextTheme.ERROR}
                        />
                    )}
                </HStack>

                <Input
                    type="text"
                    autoFocus={true}
                    placeholder={t('Логин')}
                    value={username}
                    onChange={onChangeUsername}
                    className={cls.border}
                />
                <Input
                    type="password"
                    placeholder={t('Пароль')}
                    value={password}
                    onChange={onChangePassword}
                    className={cls.border}
                />
                <Button
                    theme={ButtonTheme.BACKGROUND_INVERT}
                    onClick={onLoginClick}
                    disabled={isLoading || isEmptyInput || !!error}
                    tabIndex={tabIndex}
                >
                    {t('Войти')}
                </Button>
            </div>
        </DynamicModuleLoader>
    )
})

export default LoginForm
