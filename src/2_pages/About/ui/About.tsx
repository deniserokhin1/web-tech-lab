import { Counter } from '5_entities/Counter'
import { useTranslation } from 'react-i18next'

const About = (): JSX.Element => {
    const { t } = useTranslation('about')

    return (
        <>
            <div>{t('О проекте')}</div>
        <Counter />
        </>
    )
}

export default About
