import { classNames } from '6_shared/lib'
import cls from './Select.module.scss'
import { type ChangeEvent, useMemo, memo } from 'react'

export interface SelectOption {
    value: string
    content: string
}

interface SelectProps {
    className?: string
    label?: string
    options?: SelectOption[]
    value?: string
    readonly?: boolean
    onChange?: (value: string) => void
}

export const Select = memo((props: SelectProps) => {
    const { label, options, onChange, value, readonly } = props

    const optionList = useMemo(() => {
        return options?.map((item: SelectOption) => (
            <option className={cls.option} value={item.value} key={item.value}>
                {item.content}
            </option>
        ))
    }, [options])

    const changeHandler = (e: ChangeEvent<HTMLSelectElement>): void => {
        onChange?.(e.target.value)
    }

    const mods = {
        [cls.disabled]: readonly,
    }

    return (
        <div className={classNames(cls.container)}>
            {label && <span className={cls.label}>{label}</span>}
            <select
                className={classNames(cls.select, mods)}
                value={value}
                onChange={changeHandler}
                disabled={readonly}
            >
                {optionList}
            </select>
        </div>
    )
})
