import cls from './ProfileCard.module.scss'
import type { FC } from 'react'
import { classNames } from '6_shared/lib'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from '1_app/providers/StoreProvider'
import { getProfileData } from '5_entities/Profile/model/selectors/getProfileData'
// import { getProfileError } from '5_entities/Profile/model/selectors/getProfileError'
// import { getProfileIsLoading } from '5_entities/Profile/model/selectors/getProfileIsLoading'
import { Text } from '6_shared/ui/Text/Text'
import { Button } from '6_shared/ui/Button'
import { ButtonTheme } from '6_shared/ui/Button/Button'
import { Input } from '6_shared/ui/Input'

interface ProfileCardProps {
    className?: string
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
    const { className } = props
    const data = useAppSelector(getProfileData)
    // const error = useAppSelector(getProfileError)
    // const isLoading = useAppSelector(getProfileIsLoading)

    const namespace = __IS_DEV__ ? 'translation' : 'profile'
    const { t } = useTranslation(namespace)

    const mods = {}

    return (
        <div className={classNames(cls.container, mods, [className])}>
            <div className={cls.header}>
                <Text title={t('profile.Профиль')} />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    children={t('profile.Редактировать')}
                />
            </div>
            <div className={cls.content}>
                <Input
                    value={data?.first}
                    className={cls.input}
                    placeholder={t('profile.Ваше имя')}
                />
                <Input
                    value={data?.lastname}
                    className={cls.input}
                    placeholder={t('profile.Ваша фамилия')}
                />
            </div>
        </div>
    )
}
