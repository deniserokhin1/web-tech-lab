import cls from './Modal.module.scss'
import {
    type FC,
    type ReactNode,
    useState,
    useCallback,
    useEffect,
    type TransitionEvent,
} from 'react'
import { classNames } from '6_shared/lib'
import { Portal } from '../Portal'
import { useTheme } from '6_shared/hooks/useTheme'

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
}

export const Modal: FC<ModalProps> = (props) => {
    const { className, children, isOpen, onClose } = props
    const [showModal, setShowModal] = useState(isOpen)
    const { theme } = useTheme()

    useEffect(() => {
        setShowModal(isOpen)
    }, [isOpen])

    const closeHandler = useCallback(() => {
        setShowModal(false)
    }, [])

    const onContentClick = (e: React.MouseEvent): void => {
        e.stopPropagation()
    }

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            console.log(e.key)
            if (e.key === 'Escape') closeHandler()
        },
        [closeHandler],
    )

    useEffect(() => {
        isOpen
            ? window.addEventListener('keydown', onKeyDown)
            : window.removeEventListener('keydown', onKeyDown)
    }, [isOpen, onKeyDown])

    const mods: Record<string, boolean> = {
        [cls.opened]: showModal,
    }

    const onTransitionEnd = (e: TransitionEvent<HTMLDivElement>): void => {
        const target = e.target as HTMLElement

        if (target.className !== cls.overlay) return
        if (isOpen && !showModal) onClose?.()
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