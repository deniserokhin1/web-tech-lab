import { useCallback, memo } from 'react'

import { useTranslation } from 'react-i18next'

import { classNames } from '@/6_shared/lib'
import { Select } from '@/6_shared/ui/Select'

import { Country } from '../model/types/country'

interface CountrySelectProps {
    className?: string
    value?: Country
    readonly?: boolean
    onChange?: (value: Country) => void
}

const options = [
    { value: Country.RU, content: Country.RU },
    { value: Country.UK, content: Country.UK },
    { value: Country.US, content: Country.US },
]

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { value, readonly, onChange } = props

    const namespace = __IS_DEV__ ? 'translation' : 'namespace'
    const { t } = useTranslation(namespace)

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Country)
        },
        [onChange],
    )

    return (
        <Select
            className={classNames('')}
            value={value}
            onChange={onChangeHandler}
            label={t('Страна') as string}
            options={options}
            readonly={readonly}
        />
    )
})
