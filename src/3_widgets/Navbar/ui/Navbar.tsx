import cls from './Navbar.module.scss'
import type { FC } from 'react'
import { classNames } from '6_shared/lib'
import { AppLink } from '6_shared/ui/AppLink'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.container)}>
            <div className={cls.links}>
                <AppLink className={cls.link} to="/" children={t('Главная')} />
                <AppLink className={cls.link} to="about" children={t('О нас')} />
            </div>
        </div>
    )
}
