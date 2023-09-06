import { Suspense, type FC } from 'react'
import { Modal } from '6_shared/ui/Modal/Modal'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'
import { PageLoader } from '3_widgets/PageLoader'
import { SpinerDotsTheme } from '6_shared/ui/SpinerDots/SpinerDots'
import LoginForm from '../LoginForm/LoginForm'

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
    storybook?: boolean
}

export const LoginModal: FC<LoginModalProps> = ({ isOpen, onClose, storybook }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} lazy={true}>
            <Suspense fallback={<PageLoader theme={SpinerDotsTheme.INVERT} />}>
                {storybook ? <LoginForm /> : <LoginFormAsync />}
            </Suspense>
        </Modal>
    )
}
