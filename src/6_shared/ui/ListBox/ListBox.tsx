import { useAppSelector } from '1_app/providers/StoreProvider'
import { getUISecondaryColor } from '4_features/UI/model/selectors/getUI'
import { IconComponent, classNames } from '6_shared/lib'
import { Listbox as HListbox } from '@headlessui/react'
import { Fragment, memo, useMemo, type ReactNode } from 'react'
import { Button } from '../Button'
import { ButtonTheme } from '../Button/Button'
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
    onChange?: <T extends string>(value: T) => void
}

export const ListBox = memo((props: HListboxProps) => {
    const { className, items, defaultValue, onChange, value, readonly } = props
    const color = useAppSelector(getUISecondaryColor)

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
            className={classNames(cls.container, mods, [className])}
            value={value}
            onChange={onChange}
        >
            <HListbox.Button className={cls.trigger} as="div">
                <Button theme={ButtonTheme.OUTLINE}>{buttonTitle || defaultValue}</Button>
            </HListbox.Button>

            <HListbox.Options className={cls.options}>
                {items?.map((item, index) => (
                    <HListbox.Option
                        key={index}
                        value={item.value}
                        disabled={item.unavailable}
                        as={Fragment}
                    >
                        {({ active, selected }) => (
                            <li
                                className={classNames(cls.item, {
                                    [cls.active]: active,
                                    [cls.disabled]: item.unavailable,
                                })}
                            >
                                {selected && (
                                    <IconComponent name="check" pathFill={color} />
                                )}

                                {item.content}
                            </li>
                        )}
                    </HListbox.Option>
                ))}
            </HListbox.Options>
        </HListbox>
    )
})
