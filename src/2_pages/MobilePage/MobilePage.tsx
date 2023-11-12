import { memo } from 'react'

import { useTranslation } from 'react-i18next'

import { useAppSelector } from '@/1_app/providers/StoreProvider'
import { LangSwitcher } from '@/3_widgets/LangSwitcher'
import { ThemeSwitcher } from '@/3_widgets/ThemeSwitcher'
import { getUIBgColor } from '@/4_features/UI'
import Gears from '@/6_shared/assets/gears.svg'
import { Card } from '@/6_shared/ui/Card'
import { Icon } from '@/6_shared/ui/Icon'
import { HStack, VStack } from '@/6_shared/ui/Stack'
import { Text, TextAlign, TextSize } from '@/6_shared/ui/Text'

import cls from './MobilePage.module.scss'

interface MobilePageProps {
    className?: string
}

export const MobilePage = memo((props: MobilePageProps) => {
    const mainColor = useAppSelector(getUIBgColor)

    const { t } = useTranslation()

    return (
        <VStack className={cls.container} align="center" justify="between">
            <Card>
                <Text
                    text={t('mobile.Мобильная версия')}
                    align={TextAlign.LEFT}
                    size={TextSize.ML}
                />
            </Card>

            <Icon Svg={Gears} className={cls.svg} />

            <HStack className={cls.bottom} gap="32" max>
                <ThemeSwitcher mainColor={mainColor} />
                <LangSwitcher />
            </HStack>
        </VStack>
    )
})
