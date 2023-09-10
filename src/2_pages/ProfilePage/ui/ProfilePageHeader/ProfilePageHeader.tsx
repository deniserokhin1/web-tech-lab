import { Text } from '6_shared/ui/Text/Text'
import cls from './ProfilePageHeader.module.scss'
import { useCallback, type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '6_shared/ui/Button'
import { ButtonTheme } from '6_shared/ui/Button/Button'
import {
    getProfileIsLoading,
    getProfileReadOnly,
    profileActions,
    updateProfileData,
} from '5_entities/Profile'
import { useAppDispatch, useAppSelector } from '1_app/providers/StoreProvider'

interface ProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader = memo((props: ProfilePageHeaderProps) => {
    const readonly = useAppSelector(getProfileReadOnly)
    const isLoading = useAppSelector(getProfileIsLoading)

    const namespace = __IS_DEV__ ? 'translation' : 'namespace'
    const { t } = useTranslation(namespace)

    const dispatch = useAppDispatch()
    const { setReadOnly, cancelEdit } = profileActions

    const onEdit = useCallback(() => {
        dispatch(setReadOnly(false))
    }, [dispatch, setReadOnly])

    const onCancelEdit = useCallback(() => {
        dispatch(cancelEdit())
    }, [dispatch, cancelEdit])

    const onSave = useCallback(() => {
        dispatch(updateProfileData())
    }, [dispatch])

    return (
        <div className={cls.header}>
            <Text title={t('profile.Профиль')} />

            {readonly ? (
                <Button
                    theme={ButtonTheme.OUTLINE}
                    children={t('profile.Редактировать')}
                    onClick={onEdit}
                    disabled={isLoading}
                />
            ) : (
                <div className={cls.buttons}>
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
                </div>
            )}
        </div>
    )
})
