import { memo, useCallback } from 'react'
import { Select } from '@/6_shared/ui/Select/Select'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/6_shared/lib'
import { Currency } from '../model/types/currency'

const options = [
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.USD, content: Currency.USD },
]

interface CurrencySelectProps {
    className?: string
    value?: Currency
    readonly?: boolean
    onChange?: (value: Currency) => void
    widthFitContent?: boolean
}

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { onChange, value, readonly, widthFitContent } = props

    const namespace = __IS_DEV__ ? 'translation' : 'profile'
    const { t } = useTranslation(namespace)

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Currency)
        },
        [onChange],
    )

    return (
        <Select
            className={classNames('')}
            value={value}
            onChange={onChangeHandler}
            label={t('profile.Валюта')}
            options={options}
            readonly={readonly}
            labelFitContent={widthFitContent}
        />
    )
})
