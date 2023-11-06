import { Fragment, memo, useMemo, type ReactNode } from 'react'

import { Listbox as HListbox } from '@headlessui/react'

import Check from '@/6_shared/assets/check.svg'
import { classNames } from '@/6_shared/lib'

import { Button } from '../../../Button'
import { ButtonTheme } from '../../../Button/Button'
import { Icon } from '../../../Icon'
import popUpCls from '../styles/popup.module.scss'

import cls from './ListBox.module.scss'

export interface HListboxItems {
    value: string
    content: ReactNode
    unavailable?: boolean
}

export interface HListboxProps {
    items?: HListboxItems[]
    className?: string
    value?: string
    defaultValue?: string
    readonly?: boolean
    color?: string
    onChange?: <T extends string>(value: T) => void
}

export const ListBox = memo((props: HListboxProps) => {
    const { className, items, defaultValue, onChange, value, readonly } = props

    const buttonTitle = useMemo(() => {
        return items?.find((i) => i.value === value)?.content
    }, [items, value])

    const mods = {
        [cls.disabled]: readonly,
    }

    return (
        <HListbox
            as="div"
            disabled={readonly}
            className={classNames(popUpCls.container, mods, [className])}
            value={value}
            onChange={onChange}
        >
            <HListbox.Button className={popUpCls.button} as="div">
                <Button theme={ButtonTheme.OUTLINE}>{buttonTitle || defaultValue}</Button>
            </HListbox.Button>

            <HListbox.Options className={popUpCls.menu}>
                {items?.map((item, index) => (
                    <HListbox.Option
                        key={index}
                        value={item.value}
                        disabled={item.unavailable}
                        as={Fragment}
                    >
                        {({ active, selected }) => (
                            <li
                                className={classNames(popUpCls.item, {
                                    [popUpCls.active]: active,
                                    [cls.disabled]: item.unavailable,
                                })}
                            >
                                <Icon Svg={Check} opacity={selected ? 1 : 0} />

                                {item.content}
                            </li>
                        )}
                    </HListbox.Option>
                ))}
            </HListbox.Options>
        </HListbox>
    )
})
