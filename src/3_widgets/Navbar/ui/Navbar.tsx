import cls from './Navbar.module.scss'
import { useState, type FC, useCallback } from 'react'
import { classNames } from '6_shared/lib'
import { Button } from '6_shared/ui/Button'
import { useTranslation } from 'react-i18next'
import { ButtonTheme } from '6_shared/ui/Button/Button'
import { LoginModal } from '4_features/AuthByUserName'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
    const [isAuthModal, setIsAuthModal] = useState(false)

    const onCloseModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, [])

    const onShowModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, [])

    const { t } = useTranslation()

    return (
        <div className={classNames(cls.container)}>
            <div className={cls.links}>
                <Button theme={ButtonTheme.CLEAR_INVERT} onClick={onShowModal}>
                    {t('Войти')}
                </Button>
                
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            </div>
        </div>
    )
}
