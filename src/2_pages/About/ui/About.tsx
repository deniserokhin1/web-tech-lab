import { memo } from 'react'

import { useTranslation } from 'react-i18next'

import { Text, TextAlign } from '@/6_shared/ui/Text'

const About = memo((): JSX.Element => {
    const { t } = useTranslation('about')

    return <Text title={t('О проекте')} align={TextAlign.LEFT} />
})

export default About
