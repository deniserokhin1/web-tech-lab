/* eslint-disable i18next/no-literal-string */
import { memo, type ReactNode } from 'react'
import { Overlay } from '../Overlay/Overlay'
import cls from './Drawer.module.scss'
import { Portal } from '../Portal/Portal'
import { useTheme } from '1_app/providers/ThemeProvider'
import { classNames, type Mods } from '6_shared/lib/classNames/classNames'
import { Button } from '../Button'
import { ButtonTheme } from '../Button/Button'

interface DrawerProps {
    className?: string
    children: ReactNode
    isOpen?: boolean
    onClose?: () => void
}

export const Drawer = memo((props: DrawerProps) => {
    const { className, children, onClose, isOpen } = props
    const { theme } = useTheme()

    const mods: Mods = {
        [cls.opened]: isOpen,
    }

    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className, theme])}>
                <Overlay />
                <div className={cls.content}>
                    <Button
                        onClick={onClose}
                        theme={ButtonTheme.BACKGROUND}
                        className={cls.offsetButton}
                        animate={false}
                    >
                        Закрыть
                    </Button>

                    {children}
                </div>
            </div>
        </Portal>
    )
})
