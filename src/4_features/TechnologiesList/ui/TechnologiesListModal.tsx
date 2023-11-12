import { Suspense, type FC } from 'react'

import { PageLoader } from '@/3_widgets/PageLoader'
import { Modal } from '@/6_shared/ui/Modal'
import { SpinerDotsTheme } from '@/6_shared/ui/SpinerDots'

import { TechnologiesListAsync } from './TechnologiesListAsync'

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
    storybook?: boolean
    isShow?: boolean
}

export const TechnologiesListModal: FC<LoginModalProps> = ({ isOpen, onClose, storybook }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} lazy={true}>
            <Suspense fallback={<PageLoader theme={SpinerDotsTheme.INVERT} big={false} />}>
                <TechnologiesListAsync />
            </Suspense>
        </Modal>
    )
}
