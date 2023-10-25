import { Suspense, type FC } from 'react'
import { Modal } from '@/6_shared/ui/Modal'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'
import { PageLoader } from '@/3_widgets/PageLoader'
import { SpinerDotsTheme } from '@/6_shared/ui/SpinerDots'
import LoginForm from '../LoginForm/LoginForm'

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
    storybook?: boolean
}

export const LoginModal: FC<LoginModalProps> = ({
    isOpen,
    onClose,
    storybook = false,
}) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} lazy={true}>
            <Suspense
                fallback={<PageLoader theme={SpinerDotsTheme.INVERT} big={false} />}
            >
                {storybook ? <LoginForm /> : <LoginFormAsync />}
            </Suspense>
        </Modal>
    )
}
