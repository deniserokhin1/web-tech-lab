import { useEffect, useState, useCallback, type TransitionEvent } from 'react'

interface IUseModal {
    showModal: boolean
    closeHandler: () => void
    onContentClick: (e: React.MouseEvent) => void
    onTransitionEnd: (e: TransitionEvent<HTMLDivElement>) => void
}

export const useModal = (
    isOpen: boolean,
    cls: Record<string, string>,
    onClose?: () => void,
    isMobile?: boolean
): IUseModal => {
    const [showModal, setShowModal] = useState(isOpen)

    useEffect(() => {
        setShowModal(isOpen)
    }, [isOpen])

    const closeHandler = useCallback(() => {
        setShowModal(false)
    }, [])

    const onContentClick = (e: React.MouseEvent): void => {
        e.stopPropagation()
    }

    const onTransitionEnd = (e: TransitionEvent<HTMLDivElement>): void => {
        const target = e.target as HTMLElement

        if (target.className !== cls.overlay) return
        if (isOpen && !showModal) onClose?.()
    }

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeHandler()
        },
        [closeHandler],
    )

    useEffect(() => {
        if(isMobile) return
        isOpen
            ? window.addEventListener('keydown', onKeyDown)
            : window.removeEventListener('keydown', onKeyDown)
    }, [isOpen, onKeyDown, isMobile])

    return { showModal, closeHandler, onContentClick, onTransitionEnd }
}
