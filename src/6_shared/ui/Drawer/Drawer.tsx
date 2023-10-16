import { useTheme } from '1_app/providers/ThemeProvider'
import { useModal } from '6_shared/hooks/useModal'
import { IconComponent } from '6_shared/lib'
import { classNames, type Mods } from '6_shared/lib/classNames/classNames'
import { useCallback, useEffect, type FC, type ReactNode, memo } from 'react'
import { Button } from '../Button'
import { Portal } from '../Portal/Portal'
import cls from './Drawer.module.scss'
import { useAnimationLibs } from '6_shared/lib/components/AnimationProvider'

interface DrawerProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    lazy?: boolean
    color?: string
    onClose?: () => void
}

const height = window.innerHeight - 100

export const DrawerContent: FC<DrawerProps> = (props) => {
    const { className, children, onClose, isOpen = false, lazy, color } = props
    const { theme } = useTheme()
    const { closeHandler, onContentClick, showModal, onTransitionEnd } =
        useModal(isOpen, cls, onClose, true)

    const { isLoaded, Gesture, Spring } = useAnimationLibs()
    const [{ y }, api] = Spring.useSpring(() => ({ y: height }))

    const open = useCallback(() => {
        api.start({
            y: 0,
            immediate: false,
            config: {
                friction: 16,
                tension: 110,
            },
        })
    }, [api])

    useEffect(() => {
        if (isOpen) open()
    }, [isOpen, open])

    const close = useCallback(() => {
        api.start({
            y: height,
            immediate: false,
        })
    }, [api])

    const downClickHandler = useCallback(() => {
        closeHandler()
        close()
    }, [close, closeHandler])

    const bind = Gesture.useDrag(
        ({
            last,
            velocity: [, vy],
            direction: [, dy],
            movement: [, my],
            cancel,
        }) => {
            if (my < -70) cancel()

            if (last) {
                if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
                    closeHandler()
                    close()
                } else {
                    open()
                }
            } else {
                api.start({ y: my, immediate: true })
            }
        },
        {
            from: () => [0, 0],
            filterTaps: true,
            bounds: { top: 0 },
            rubberband: true,
        },
    )

    const mods: Mods = {
        [cls.opened]: showModal,
    }

    const display = y.to((py) => (py < height ? 'block' : 'none'))

    y.to((py) => console.log('py:', py))
    console.log('height:', height)

    if (lazy && !isOpen) return null

    return (
        <Portal>
            <div
                className={classNames(cls.container, mods, [className, theme])}
                onClick={downClickHandler}
            >
                <div
                    className={classNames(cls.overlay)}
                    onTransitionEnd={onTransitionEnd}
                />
                <Spring.a.div
                    style={{
                        display,
                        bottom: `calc(-100vh + ${height}px)`,
                        y,
                    }}
                    className={cls.content}
                    onClick={onContentClick}
                    {...bind()}
                >
                    <Button className={cls.button} onClick={downClickHandler}>
                        <IconComponent name="down" pathFill={color} />
                    </Button>

                    {children}
                </Spring.a.div>
            </div>
        </Portal>
    )
}

export const Drawer = memo((props: DrawerProps) => {
    const { isLoaded } = useAnimationLibs()

    if (!isLoaded) return null

    return <DrawerContent {...props} />
})
