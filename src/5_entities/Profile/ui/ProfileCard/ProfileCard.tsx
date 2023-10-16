import { CountrySelect, type Country } from '@/5_entities/Country'
import { CurrencySelect, type Currency } from '@/5_entities/Currency'
import { Avatar } from '@/6_shared/ui/Avatar/Avatar'
import { Input } from '@/6_shared/ui/Input'
import { SpinerDots } from '@/6_shared/ui/SpinerDots/SpinerDots'
import { HStack } from '@/6_shared/ui/Stack/HStack/HStack'
import { VStack } from '@/6_shared/ui/Stack/VStatck/VStack'
import { Text, TextAlign, TextTheme } from '@/6_shared/ui/Text/Text'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { type IProfile } from '../../model/types/profile'
import cls from './ProfileCard.module.scss'

interface ProfileCardProps {
    className?: string
    data?: IProfile
    isLoading?: boolean
    error?: string
    readonly?: boolean
    onChangeLasttName?: (value: string) => void
    onChangeFirstName?: (value: string) => void
    onChangeAge?: (value: string) => void
    onChangeCity?: (value: string) => void
    onChangeUsername?: (value: string) => void
    onChangeAvatar?: (value: string) => void
    onChangeCurrency?: (value: Currency) => void
    onChangeCountry?: (value: Country) => void
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
    const {
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstName,
        onChangeLasttName,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
        onChangeCurrency,
        onChangeCountry,
    } = props

    const namespace = __IS_DEV__ ? 'translation' : 'profile'
    const { t } = useTranslation(namespace)

    if (isLoading) {
        return <SpinerDots />
    }

    if (error) {
        return (
            <Text
                theme={TextTheme.ERROR}
                title={t('profile.Ошибка при загрузке профиля')}
                text={t('profile.Перезагрузите страницу')}
            />
        )
    }

    return (
        <VStack className={cls.content} max={true} gap="8">
            {data?.avatar && (
                <HStack max={true} justify="start">
                    {<Avatar src={data.avatar} />}
                </HStack>
            )}

            <HStack gap="16" max={true}>
                <Text text={t('profile.Ваше имя')} align={TextAlign.LEFT} />
                <Input
                    value={data?.first}
                    onChange={onChangeFirstName}
                    readOnly={readonly}
                    data-testid="ProfileCard.Firstname"
                    />
            </HStack>

            <HStack gap="16" max={true}>
                <Text text={t('profile.Ваша фамилия')} align={TextAlign.LEFT} />
                <Input
                    value={data?.lastname}
                    onChange={onChangeLasttName}
                    readOnly={readonly}
                    data-testid="ProfileCard.Lastname"
                />
            </HStack>

            <HStack gap="16" max={true}>
                <Text text={t('profile.Возраст')} align={TextAlign.LEFT} />
                <Input value={data?.age} onChange={onChangeAge} readOnly={readonly} />
            </HStack>

            <HStack gap="16" max={true}>
                <Text text={t('profile.Город')} align={TextAlign.LEFT} />
                <Input value={data?.city} onChange={onChangeCity} readOnly={readonly} />
            </HStack>

            <HStack gap="16" max={true}>
                <Text text={t('profile.Имя пользователя')} align={TextAlign.LEFT} />
                <Input
                    value={data?.username}
                    onChange={onChangeUsername}
                    readOnly={readonly}
                />
            </HStack>

            <HStack gap="16" max={true}>
                <Text text={t('profile.Ссылка на аватар')} align={TextAlign.LEFT} />
                <Input
                    value={data?.avatar}
                    onChange={onChangeAvatar}
                    readOnly={readonly}
                />
            </HStack>

            <CurrencySelect
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />

            <CountrySelect
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />
        </VStack>
    )
}
