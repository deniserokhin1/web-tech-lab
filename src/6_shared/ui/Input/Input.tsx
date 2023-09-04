import cls from './Input.module.scss'
import { type InputHTMLAttributes, memo, type ChangeEvent } from 'react'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string
    onChange?: (value: string) => void
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autoFocus,
        ...otherProps
    } = props

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        onChange?.(e.target.value)
    }

    return (
        <input
            className={cls.input}
            type={type}
            value={value}
            autoFocus={autoFocus}
            onChange={handleChange}
            placeholder={placeholder}
            {...otherProps}
        />
    )
})
