import { Text, TextAlign } from '6_shared/ui/Text/Text'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'

const About = memo((): JSX.Element => {
    const { t } = useTranslation('about')

    return (
        <div>
            <Text title={t('О проекте')} align={TextAlign.LEFT} />
        </div>
    )
})

export default About
