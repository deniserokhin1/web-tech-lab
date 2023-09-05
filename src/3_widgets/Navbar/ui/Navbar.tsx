import cls from './Navbar.module.scss'
import { useState, type FC, useCallback, useEffect } from 'react'
import { classNames } from '6_shared/lib'
import { Button } from '6_shared/ui/Button'
import { useTranslation } from 'react-i18next'
import { ButtonTheme } from '6_shared/ui/Button/Button'
import { LoginModal } from '4_features/AuthByUserName'
import {
    useAppDispatch,
    useAppSelector,
} from '1_app/providers/StoreProvider/config/store'
import { getUserAuthData, userActions } from '5_entities/User'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
    const [isAuthModal, setIsAuthModal] = useState(false)
    const authData = useAppSelector(getUserAuthData)
    const dispatch = useAppDispatch()

    const onCloseModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, [])

    const onShowModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, [])

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    const { t } = useTranslation()

    useEffect(() => {
        if (authData) setIsAuthModal(false)
    }, [authData])

    if (authData) {
        return (
            <div className={classNames(cls.container)}>
                <div className={cls.links}>
                    <Button theme={ButtonTheme.CLEAR_INVERT} onClick={onLogout}>
                        {t('Выйти')}
                    </Button>

                    <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
                </div>
            </div>
        )
    }

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
