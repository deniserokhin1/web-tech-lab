import { classNames } from '@/6_shared/lib'
import { type DropDowDirection } from '@/6_shared/types/ui'
import { Popover as HPopover } from '@headlessui/react'
import { type ReactNode } from 'react'
import popUpCls from '../styles/popup.module.scss'
import cls from './Popover.module.scss'

export interface HPopoverProps {
    className?: string
    trigger?: ReactNode
    direciotn?: DropDowDirection
    children: ReactNode
}

export const Popover = (props: HPopoverProps): JSX.Element => {
    const { className, children, direciotn = 'left', trigger } = props
    return (
        <HPopover className={classNames(popUpCls.container, {}, [className])}>
            <HPopover.Button as="div" className={popUpCls.button}>
                {trigger}
            </HPopover.Button>
            
            <HPopover.Panel
                className={classNames(cls.panel, {}, [popUpCls[direciotn]])}
                unmount={false}
            >
                {children}
            </HPopover.Panel>
        </HPopover>
    )
}
