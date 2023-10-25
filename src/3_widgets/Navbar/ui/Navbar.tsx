import { memo, useCallback, useEffect, useState, type FC } from 'react'

import { useTranslation } from 'react-i18next'

import { useAppSelector } from '@/1_app/providers/StoreProvider/config/store'
import { LoginModal } from '@/4_features/AuthByUserName'
import { AvatarDropDown } from '@/4_features/AvatarDropDown'
import { NotificationButton } from '@/4_features/NotificationButton'
import { getUserAuthData } from '@/5_entities/User'
import { classNames } from '@/6_shared/lib'
import { Button, ButtonTheme } from '@/6_shared/ui/Button'
import { HStack } from '@/6_shared/ui/Stack'

import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = memo((props) => {
    const [isAuthModal, setIsAuthModal] = useState(false)
    const authData = useAppSelector(getUserAuthData)

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, [])

    const { t } = useTranslation()

    useEffect(() => {
        if (authData) setIsAuthModal(false)
    }, [authData])

    if (authData) {
        return (
            <header className={classNames(cls.container)}>
                <HStack gap="16" className={cls.links}>
                    <NotificationButton />
                    <AvatarDropDown />
                </HStack>
                <LoginModal isOpen={isAuthModal} onClose={onToggleModal} />
            </header>
        )
    }

    return (
        <header className={classNames(cls.container)}>
            <div className={cls.links}>
                <Button
                    theme={ButtonTheme.CLEAR_INVERT}
                    onClick={onToggleModal}
                >
                    {t('Войти')}
                </Button>

                <LoginModal isOpen={isAuthModal} onClose={onToggleModal} />
            </div>
        </header>
    )
})
