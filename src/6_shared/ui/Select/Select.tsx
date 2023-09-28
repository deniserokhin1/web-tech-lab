import { classNames } from '6_shared/lib'
import cls from './Select.module.scss'
import { type ChangeEvent, useMemo } from 'react'

export interface SelectOption<T extends string> {
    value: T
    content: string
}

interface SelectProps<T extends string> {
    className?: string
    label?: string
    options?: Array<SelectOption<T>>
    value?: T
    readonly?: boolean
    labelFitContent?: boolean
    onChange?: (value: T) => void
}

export const Select = <T extends string>(props: SelectProps<T>): JSX.Element => {
    const { label, options, onChange, value, readonly, labelFitContent } = props

    const optionList = useMemo(() => {
        return options?.map((item: SelectOption<T>) => (
            <option className={cls.option} value={item.value} key={item.value}>
                {item.content}
            </option>
        ))
    }, [options])

    const changeHandler = (e: ChangeEvent<HTMLSelectElement>): void => {
        onChange?.(e.target.value as T)
    }

    const mods = {
        [cls.disabled]: readonly,
    }
    const labelMods = {
        [cls.fitContent]: labelFitContent,
    }

    return (
        <div className={classNames(cls.container, labelMods)}>
            {label && <span className={classNames(cls.label)}>{label}</span>}
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
}
