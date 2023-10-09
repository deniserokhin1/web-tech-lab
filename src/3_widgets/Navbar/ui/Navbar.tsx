import cls from './Navbar.module.scss'
import { useState, type FC, useCallback, useEffect, memo } from 'react'
import { classNames } from '6_shared/lib'
import { Button } from '6_shared/ui/Button'
import { useTranslation } from 'react-i18next'
import { ButtonTheme } from '6_shared/ui/Button/Button'
import { LoginModal } from '4_features/AuthByUserName'
import {
    useAppDispatch,
    useAppSelector,
} from '1_app/providers/StoreProvider/config/store'
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '5_entities/User'
import { Dropdown } from '6_shared/ui/DropDown/DropDown'
import { Avatar } from '6_shared/ui/Avatar/Avatar'
import { RoutePath } from '1_app/providers/Router/config/routeConfig'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = memo((props) => {
    const [isAuthModal, setIsAuthModal] = useState(false)
    const authData = useAppSelector(getUserAuthData)
    const isAdmin = useAppSelector(isUserAdmin)
    const isManager = useAppSelector(isUserManager)
    const dispatch = useAppDispatch()

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, [])

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    const { t } = useTranslation()

    useEffect(() => {
        if (authData) setIsAuthModal(false)
    }, [authData])

    const isAdminPanelAvaliable = isAdmin || isManager

    if (authData) {
        return (
            <header className={classNames(cls.container)}>
                <div className={cls.links}>
                    <Dropdown
                        direciotn="right"
                        items={[
                            ...(isAdminPanelAvaliable
                                ? [
                                      {
                                          content: t('Админка'),
                                          href: RoutePath.admin_panel,
                                      },
                                  ]
                                : []),
                            {
                                content: t('Профиль'),
                                href: RoutePath.profile + authData.id,
                            },
                            {
                                content: t('Выйти'),
                                onClick: onLogout,
                            },
                        ]}
                        trigger={<Avatar size={35} src={authData.avatar} border={true} />}
                    />

                    <LoginModal isOpen={isAuthModal} onClose={onToggleModal} />
                </div>
            </header>
        )
    }

    return (
        <header className={classNames(cls.container)}>
            <div className={cls.links}>
                <Button theme={ButtonTheme.CLEAR_INVERT} onClick={onToggleModal}>
                    {t('Войти')}
                </Button>

                <LoginModal isOpen={isAuthModal} onClose={onToggleModal} />
            </div>
        </header>
    )
})
