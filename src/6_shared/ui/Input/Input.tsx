import { classNames } from '@/6_shared/lib'
import cls from './Input.module.scss'
import { type InputHTMLAttributes, memo, type ChangeEvent } from 'react'

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'value' | 'readOnly'
>

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string | number
    onChange?: (value: string) => void
    readOnly?: boolean
    noBorder?: boolean
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autoFocus,
        readOnly,
        noBorder,
        ...otherProps
    } = props

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        onChange?.(e.target.value)
    }

    const mods = {
        [cls.readonly]: readOnly,
        [cls.noBorder]: noBorder
    }

    return (
        <input
            className={classNames(cls.input, mods, [className])}
            type={type}
            value={value}
            autoFocus={autoFocus}
            onChange={handleChange}
            placeholder={placeholder}
            readOnly={readOnly}
            {...otherProps}
        />
    )
})
