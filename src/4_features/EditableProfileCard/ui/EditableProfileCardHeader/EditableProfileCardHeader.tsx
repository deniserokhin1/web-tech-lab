import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './EditableProfileCardHeader.module.scss'
import { HStack } from '@/6_shared/ui/Stack'
import { Text } from '@/6_shared/ui/Text/Text'
import { Button } from '@/6_shared/ui/Button'
import { ButtonTheme } from '@/6_shared/ui/Button/Button'
import { useAppDispatch, useAppSelector } from '@/1_app/providers/StoreProvider'
import { getProfileReadOnly } from '../../model/selectors/getProfileReadonly'
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading'
import { getProfileError } from '../../model/selectors/getProfileError'
import { getProfileData } from '../../model/selectors/getProfileData'
import { profileActions } from '../../model/slices/EditableProfileCardSlice'
import { updateProfileData } from '../../model/services/updateProfileData'
import { getUserAuthData } from '@/5_entities/User'

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
                            data-testid="EditableProfileCardHeader.EditButton"
                        />
                    ) : (
                        <HStack gap="16">
                            <Button
                                theme={ButtonTheme.BACKGROUND}
                                children={t('profile.Сохранить')}
                                onClick={onSave}
                                data-testid="EditableProfileCardHeader.SaveButton"
                            />
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                children={t('profile.Отменить')}
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
