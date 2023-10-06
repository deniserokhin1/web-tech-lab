import { useAppDispatch, useAppSelector } from '1_app/providers/StoreProvider'
import { type Country } from '5_entities/Country'
import { type Currency } from '5_entities/Currency'
import { ProfileCard } from '5_entities/Profile'
import { useInitialEffect } from '6_shared/hooks/useInitialEffect'
import {
    DynamicModuleLoader,
    type ReducersList,
} from '6_shared/lib/components/DynamicModuleLoader'
import { Text, TextTheme } from '6_shared/ui/Text/Text'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { getProfileError } from '../../model/selectors/getProfileError'
import { getProfileForm } from '../../model/selectors/getProfileForm'
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading'
import { getProfileReadOnly } from '../../model/selectors/getProfileReadonly'
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors'
import { fetchProfileData } from '../../model/services/fetchProfileData'
import {
    profileActions,
    profileReducer,
} from '../../model/slices/EditableProfileCardSlice'
import { ValidateProfileErrors } from '../../model/types/EditableProfileCardSchema'
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader'

const namespace = __IS_DEV__ ? 'translation' : 'profile'
const reducers: ReducersList = {
    profile: profileReducer,
}

interface EditableProfileCardProps {
    className?: string
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const dispatch = useAppDispatch()
    const { t } = useTranslation(namespace)
    const { updateProfile } = profileActions
    const formData = useAppSelector(getProfileForm)
    const error = useAppSelector(getProfileError)
    const isLoading = useAppSelector(getProfileIsLoading)
    const readOnly = useAppSelector(getProfileReadOnly)
    const validateErrors = useAppSelector(getProfileValidateErrors)
    const { id } = useParams<{ id: string }>()

    const validateErrorTranslate = {
        [ValidateProfileErrors.SERVER_ERROR]: t('profile.Ошибка сервера'),
        [ValidateProfileErrors.INCORRECT_AGE]: t('profile.Некорректный возраст'),
        [ValidateProfileErrors.INCORRECT_COUNTRY]: t('profile.Некорректная страна'),
        [ValidateProfileErrors.INCORRECT_USER_DATA]: t('profile.Некорректные данные'),
        [ValidateProfileErrors.NO_DATA]: t('profile.Нет данных'),
    }

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
            <EditableProfileCardHeader />

            {validateErrors?.map((error) => (
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
