import { useTheme } from '1_app/providers/ThemeProvider'
import { useModal } from '6_shared/hooks/useModal'
import { classNames, type Mods } from '6_shared/lib/classNames/classNames'
import { type FC, type ReactNode } from 'react'
import { Portal } from '../Portal/Portal'
import cls from './Drawer.module.scss'

interface DrawerProps {
    className?: string
    children: ReactNode
    isOpen?: boolean
    lazy?: boolean
    onClose?: () => void
}

export const Drawer: FC<DrawerProps> = (props) => {
    const { className, children, onClose, isOpen = false, lazy } = props
    const { theme } = useTheme()

    const { closeHandler, onContentClick, showModal, onTransitionEnd } = useModal(
        isOpen,
        cls,
        onClose,
        true,
    )

    const mods: Mods = {
        [cls.opened]: showModal,
    }

    if (lazy && !isOpen) return null

    return (
        <Portal>
            <div
                className={classNames(cls.container, mods, [className, theme])}
                onClick={closeHandler}
            >
                <div
                    className={classNames(cls.overlay)}
                    onTransitionEnd={onTransitionEnd}
                />
                <div className={cls.content} onClick={onContentClick}>
                    {children}
                </div>
            </div>
        </Portal>
    )
}
