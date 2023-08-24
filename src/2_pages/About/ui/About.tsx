import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

interface AboutProps {}

const About: FC<AboutProps> = () => {
    const { t } = useTranslation('about')

    return <div>{t('О нас')}</div>
}

export default About
