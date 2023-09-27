import { PageWrapper } from '3_widgets/PageWrapper/PageWrapper'
import { Text, TextAlign } from '6_shared/ui/Text/Text'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'

const Main = memo((): JSX.Element => {
    const { t } = useTranslation('main')

    return (
        <PageWrapper>
            <Text title={t('Главная страница')} align={TextAlign.LEFT} />
        </PageWrapper>
    )
})

export default Main
