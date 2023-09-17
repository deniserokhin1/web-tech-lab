// import cls from './ProfilePage.module.scss'
import { memo, useCallback } from 'react'
import { DynamicModuleLoader, type ReducersList } from '6_shared/lib/components/DynamicModuleLoader'
import {
    ProfileCard,
    ValidateProfileErrors,
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadOnly,
    getProfileValidateErrors,
    profileActions,
    profileReducer,
} from '5_entities/Profile'
import { useAppDispatch, useAppSelector } from '1_app/providers/StoreProvider'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import { type Currency } from '5_entities/Currency'
import { type Country } from '5_entities/Country'
import { useTranslation } from 'react-i18next'
import { Text, TextTheme } from '6_shared/ui/Text/Text'
import { useInitialEffect } from '6_shared/hooks/useInitialEffect'
import { useParams } from 'react-router-dom'

interface ProfilePageProps {
    className?: string
}

const reducers: ReducersList = {
    profile: profileReducer,
}

const ProfilePage = memo((props: ProfilePageProps) => {
    const dispatch = useAppDispatch()
    const { updateProfile } = profileActions

    const formData = useAppSelector(getProfileForm)
    const error = useAppSelector(getProfileError)
    const isLoading = useAppSelector(getProfileIsLoading)
    const readOnly = useAppSelector(getProfileReadOnly)

    const validateErrors = useAppSelector(getProfileValidateErrors)

    const namespace = __IS_DEV__ ? 'translation' : 'profile'
    const { t } = useTranslation(namespace)

    const validateErrorTranslate = {
        [ValidateProfileErrors.SERVER_ERROR]: t('profile.Ошибка сервера'),
        [ValidateProfileErrors.INCORRECT_AGE]: t('profile.Некорректный возраст'),
        [ValidateProfileErrors.INCORRECT_COUNTRY]: t('profile.Некорректная страна'),
        [ValidateProfileErrors.INCORRECT_USER_DATA]: t('profile.Некорректные данные'),
        [ValidateProfileErrors.NO_DATA]: t('profile.Нет данных'),
    }

    const { id } = useParams<{ id: string }>()

    useInitialEffect(() => {
        if (!id) return
        dispatch(fetchProfileData(id))
    })

    const onChangeFirstName = useCallback(
        (value?: string) => {
            dispatch(updateProfile({ first: value || '' }))
        },
        [dispatch, updateProfile],
    )

    const onChangeLasttName = useCallback(
        (value?: string) => {
            dispatch(updateProfile({ lastname: value || '' }))
        },
        [dispatch, updateProfile],
    )

    const onChangeAge = useCallback(
        (value?: string) => {
            dispatch(updateProfile({ age: Number(value) || 0 }))
        },
        [dispatch, updateProfile],
    )

    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(updateProfile({ city: value || '' }))
        },
        [dispatch, updateProfile],
    )

    const onChangeUsername = useCallback(
        (username?: string) => {
            dispatch(updateProfile({ username }))
        },
        [dispatch, updateProfile],
    )

    const onChangeAvatar = useCallback(
        (avatar?: string) => {
            dispatch(updateProfile({ avatar }))
        },
        [dispatch, updateProfile],
    )

    const onChangeCurrency = useCallback(
        (currency?: Currency) => {
            dispatch(updateProfile({ currency }))
        },
        [dispatch, updateProfile],
    )

    const onChangeCountry = useCallback(
        (country?: Country) => {
            dispatch(updateProfile({ country }))
        },
        [dispatch, updateProfile],
    )

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <ProfilePageHeader />

            {!!validateErrors?.length &&
                validateErrors.map((error) => (
                    <Text
                        theme={TextTheme.ERROR}
                        text={validateErrorTranslate[error]}
                        key={error}
                    />
                ))}

            <ProfileCard
                data={formData}
                isLoading={isLoading}
                error={error}
                readonly={readOnly}
                onChangeFirstName={onChangeFirstName}
                onChangeLasttName={onChangeLasttName}
                onChangeAge={onChangeAge}
                onChangeCity={onChangeCity}
                onChangeAvatar={onChangeAvatar}
                onChangeUsername={onChangeUsername}
                onChangeCurrency={onChangeCurrency}
                onChangeCountry={onChangeCountry}
            />
        </DynamicModuleLoader>
    )
})

export default ProfilePage
