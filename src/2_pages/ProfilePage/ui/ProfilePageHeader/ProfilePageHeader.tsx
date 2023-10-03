import { Text } from '6_shared/ui/Text/Text'
import cls from './ProfilePageHeader.module.scss'
import { useCallback, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '6_shared/ui/Button'
import { ButtonTheme } from '6_shared/ui/Button/Button'
import {
    getProfileData,
    getProfileError,
    getProfileIsLoading,
    getProfileReadOnly,
    profileActions,
    updateProfileData,
} from '5_entities/Profile'
import { useAppDispatch, useAppSelector } from '1_app/providers/StoreProvider'
import { getUserAuthData } from '5_entities/User'
import { HStack } from '6_shared/ui/Stack/HStack/HStack'

interface ProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader = memo((props: ProfilePageHeaderProps) => {
    const readonly = useAppSelector(getProfileReadOnly)
    const isLoading = useAppSelector(getProfileIsLoading)
    const error = useAppSelector(getProfileError)
    const authData = useAppSelector(getUserAuthData)
    const profileData = useAppSelector(getProfileData)

    const canEdit = authData?.id === profileData?.id

    const namespace = __IS_DEV__ ? 'translation' : 'profile'
    const { t } = useTranslation(namespace)

    const dispatch = useAppDispatch()
    const { setReadOnly, cancelEdit } = profileActions

    const onEdit = useCallback(() => {
        dispatch(setReadOnly(false))
    }, [dispatch, setReadOnly])

    const onCancelEdit = useCallback(() => {
        if (__PROJECT__ === 'storybook') {
            dispatch(setReadOnly(true))
            return
        }
        dispatch(cancelEdit())
    }, [dispatch, cancelEdit, setReadOnly])

    const onSave = useCallback(() => {
        if (__PROJECT__ === 'storybook') {
            dispatch(setReadOnly(true))
            return
        }
        dispatch(updateProfileData())
    }, [dispatch, setReadOnly])

    return (
        <HStack justify="between" className={cls.header} max={true}>
            <Text title={t('profile.Профиль')} />

            {canEdit && (
                <div>
                    {readonly ? (
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            children={t('profile.Редактировать')}
                            onClick={onEdit}
                            disabled={isLoading || !!error}
                        />
                    ) : (
                        <HStack gap="16">
                            <Button
                                theme={ButtonTheme.BACKGROUND}
                                children={t('profile.Сохранить')}
                                onClick={onSave}
                            />
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                children={t('profile.Отменить')}
                                onClick={onCancelEdit}
                            />
                        </HStack>
                    )}
                </div>
            )}
        </HStack>
    )
})
