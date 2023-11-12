import { memo } from 'react'

import { useTranslation } from 'react-i18next'

import { Card } from '@/6_shared/ui/Card'
import { VStack } from '@/6_shared/ui/Stack'
import { Text, TextAlign } from '@/6_shared/ui/Text'

import cls from './About.module.scss'

const About = memo((): JSX.Element => {
    const { t } = useTranslation('about')

    return (
        <VStack gap="16">
            <Text title={t('О проекте')} align={TextAlign.LEFT} />
            <Card className={cls.cardWidth} style={{ display: 'none' }}></Card>
        </VStack>
    )
})

export default About
