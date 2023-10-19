import { useAppSelector } from '@/1_app/providers/StoreProvider'
import { getUIMainColor } from '@/4_features/UI/model/selectors/getUI'
import { useDetectDevice } from '@/6_shared/hooks/useDetectDevice'
import { classNames } from '@/6_shared/lib'
import { Button } from '@/6_shared/ui/Button'
import { ButtonTheme } from '@/6_shared/ui/Button/Button'
import { Card } from '@/6_shared/ui/Card/Card'
import { Drawer } from '@/6_shared/ui/Drawer/Drawer'
import { Input } from '@/6_shared/ui/Input'
import { Modal } from '@/6_shared/ui/Modal/Modal'
import { HStack, VStack } from '@/6_shared/ui/Stack'
import { StarRating } from '@/6_shared/ui/StarRating/StarRating'
import { Text, TextAlign, TextTheme } from '@/6_shared/ui/Text/Text'
import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './Rating.module.scss'

interface RatingProps {
    className?: string
    title?: string
    feedBackTitle?: string
    onCancel?: (starsCount: number) => void
    onAccept?: (starsCount: number, feedback?: string) => void
}

const namespace = __IS_DEV__ ? 'translation' : ''

export const Rating = memo((props: RatingProps) => {
    const { className, feedBackTitle, onAccept, onCancel, title } = props

    const { t } = useTranslation(namespace)
    const [isModalOpen, setModalOpen] = useState(false)
    const [starsCount, setStarsCount] = useState(0)
    const [feedBack, setFeedBack] = useState('')
    const color = useAppSelector(getUIMainColor)

    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount)
            if (feedBackTitle) {
                setModalOpen(true)
            } else {
                onAccept?.(selectedStarsCount)
            }
        },
        [feedBackTitle, onAccept],
    )

    const acceptHandler = useCallback(() => {
        setModalOpen(false)
        onAccept?.(starsCount, feedBack)
    }, [feedBack, onAccept, starsCount])

    const cancelHandler = useCallback(() => {
        setModalOpen(false)
        onCancel?.(starsCount)
    }, [onCancel, starsCount])

    const isMobile = useDetectDevice()

    const mods = {
        [cls.mobile]: isMobile,
    }

    const themeButton = isMobile
        ? ButtonTheme.BACKGROUND
        : ButtonTheme.BACKGROUND_INVERT

    const themeText = isMobile ? TextTheme.DEFAULT : TextTheme.DEFAULT_INVERT

    const modalContent = (
        <VStack gap="32" className={classNames(cls.container, mods)}>
            <Text
                title={feedBackTitle}
                align={TextAlign.CENTER}
                theme={themeText}
                maxWidth={true}
            />

            <Input
                placeholder={t('Ваш отзыв')}
                className={cls.border}
                value={feedBack}
                onChange={setFeedBack}
            />

            <HStack justify="center" gap="32" max={true}>
                <Button
                    theme={themeButton}
                    onClick={acceptHandler}
                    disabled={!feedBack}
                    maxWidth={isMobile}
                >
                    {t('Отправить')}
                </Button>
            </HStack>
        </VStack>
    )

    return (
        <Card className={classNames('', {}, [className])}>
            <VStack gap="16" align="center">
                <Text title={title} align={TextAlign.CENTER} />
                <StarRating onSelect={onSelectStars} />
            </VStack>

            {isMobile ? (
                <Drawer
                    isOpen={isModalOpen}
                    onClose={cancelHandler}
                    color={color}
                >
                    {modalContent}
                </Drawer>
            ) : (
                <Modal isOpen={isModalOpen}>{modalContent}</Modal>
            )}
        </Card>
    )
})
