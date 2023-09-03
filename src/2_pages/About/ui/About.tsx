import { useTranslation } from 'react-i18next'

const About = (): JSX.Element => {
    const { t } = useTranslation('about')

    return (
        <>
            <div>{t('О проекте')}</div>
        </>
    )
}

export default About
