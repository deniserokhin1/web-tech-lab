import { memo, useCallback } from 'react'

import { useTranslation } from 'react-i18next'

import { useAppDispatch, useAppSelector } from '@/1_app/providers/StoreProvider'
import { getUserAuthData } from '@/5_entities/User'
import { Button, ButtonTheme } from '@/6_shared/ui/Button'
import { HStack } from '@/6_shared/ui/Stack'
import { Text } from '@/6_shared/ui/Text'

import { getProfileData } from '../../model/selectors/getProfileData'
import { getProfileError } from '../../model/selectors/getProfileError'
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading'
import { getProfileReadOnly } from '../../model/selectors/getProfileReadonly'
import { updateProfileData } from '../../model/services/updateProfileData'
import { updateUserData } from '../../model/services/updateUserData'
import { profileActions } from '../../model/slices/EditableProfileCardSlice'

import cls from './EditableProfileCardHeader.module.scss'

interface EditableProfileCardHeaderProps {
    className?: string
}

export const EditableProfileCardHeader = memo((props: EditableProfileCardHeaderProps) => {
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
        dispatch(updateUserData())
    }, [dispatch, setReadOnly])

    return (
        <HStack justify="between" className={cls.header} max={true}>
            <Text title={t('Профиль')} />

            {canEdit && (
                <div>
                    {readonly ? (
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            children={t('Редактировать')}
                            onClick={onEdit}
                            disabled={isLoading || !!error}
                            data-testid="EditableProfileCardHeader.EditButton"
                        />
                    ) : (
                        <HStack gap="16">
                            <Button
                                theme={ButtonTheme.BACKGROUND}
                                children={t('Сохранить')}
                                onClick={onSave}
                                data-testid="EditableProfileCardHeader.SaveButton"
                            />
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                children={t('Отменить')}
                                onClick={onCancelEdit}
                                data-testid="EditableProfileCardHeader.CancelButton"
                            />
                        </HStack>
                    )}
                </div>
            )}
        </HStack>
    )
})
