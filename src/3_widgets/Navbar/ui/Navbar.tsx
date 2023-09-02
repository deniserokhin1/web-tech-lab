import cls from './Navbar.module.scss'
import { useState, type FC, useCallback } from 'react'
import { classNames } from '6_shared/lib'
import { Button } from '6_shared/ui/Button'
import { Modal } from '6_shared/ui/Modal/Modal'
import { useTranslation } from 'react-i18next'
import { ButtonTheme } from '6_shared/ui/Button/Button'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
    const [isAuthModal, setIsAuthModal] = useState(false)

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, [])

    const { t } = useTranslation()

    return (
        <div className={classNames(cls.container)}>
            <div className={cls.links}>
                {/* <Button theme={ButtonTheme.CLEAR_INVERT} onClick={onToggleModal}>
                    {t('Войти')}
                </Button> */}
                <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                    {t('Авторизация')}
                </Modal>
            </div>
        </div>
    )
}
