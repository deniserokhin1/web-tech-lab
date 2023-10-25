import { type FC, type ReactNode } from 'react'

import { useTheme } from '@/1_app/providers/ThemeProvider'
import { useModal } from '@/6_shared/hooks/useModal'
import { classNames } from '@/6_shared/lib'
import { type Mods } from '@/6_shared/lib/classNames/classNames'

import { Portal } from '../Portal'

import cls from './Modal.module.scss'

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
    lazy?: boolean
}

export const Modal: FC<ModalProps> = (props) => {
    const { className, children, isOpen = false, onClose, lazy } = props
    const { theme } = useTheme()

    const { closeHandler, onContentClick, showModal, onTransitionEnd } = useModal(
        isOpen,
        cls,
        onClose,
    )

    const mods: Mods = {
        [cls.opened]: showModal,
    }

    if (lazy && !isOpen) {
        return null
    }

    return (
        <Portal>
            <div
                className={classNames(cls.container, mods, [className, theme])}
                onClick={closeHandler}
            >
                <div
                    className={classNames(cls.overlay)}
                    onTransitionEnd={onTransitionEnd}
                >
                    <div className={classNames(cls.content)} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
