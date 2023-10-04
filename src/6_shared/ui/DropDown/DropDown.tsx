import { Menu } from '@headlessui/react'
import cls from './DropDown.module.scss'
import { classNames } from '6_shared/lib'
import { Fragment, type ReactNode } from 'react'
import { type DropDowDirection } from '6_shared/types/ui'
import { AppLink } from '../AppLink'

export interface DropdownItem {
    disabled?: boolean
    content?: ReactNode
    href?: string
    onClick?: () => void
}

export interface DropdownProps {
    className?: string
    items: DropdownItem[]
    trigger?: ReactNode
    direciotn?: DropDowDirection
}

export const Dropdown = (props: DropdownProps): JSX.Element => {
    const { className, trigger, items, direciotn = 'left' } = props
    return (
        <Menu as="div" className={classNames(cls.container, {}, [className])}>
            <Menu.Button className={cls.button}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, [cls[direciotn]])}>
                {items?.map((item, index) => {
                    const content = ({ active }: { active: boolean }): JSX.Element => (
                        <button
                            disabled={item.disabled}
                            className={classNames(cls.item, {
                                [cls.active]: active,
                            })}
                            onClick={item.onClick}
                        >
                            {item.content}
                        </button>
                    )
                    if (item.href) {
                        return (
                            <Menu.Item
                                key={index}
                                as={AppLink}
                                to={item.href}
                                className={cls.link}
                            >
                                {content}
                            </Menu.Item>
                        )
                    }
                    return (
                        <Menu.Item key={index} as={Fragment}>
                            {content}
                        </Menu.Item>
                    )
                })}
            </Menu.Items>
        </Menu>
    )
}
