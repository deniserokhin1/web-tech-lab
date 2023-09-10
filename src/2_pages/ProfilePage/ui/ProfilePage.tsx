// import cls from './ProfilePage.module.scss'
import { memo, useCallback, useEffect } from 'react'
import {
    DynamicModuleLoader,
    type ReducersList,
} from '6_shared/lib/components/DynamicModuleLoader'
import {
    ProfileCard,
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadOnly,
    profileActions,
    profileReducer,
} from '5_entities/Profile'
import { useAppDispatch, useAppSelector } from '1_app/providers/StoreProvider'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import { type Currency } from '5_entities/Currency'
import { type Country } from '5_entities/Country'

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

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

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
