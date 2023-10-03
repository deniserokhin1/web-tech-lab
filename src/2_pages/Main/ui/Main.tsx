import { PageWrapper } from '3_widgets/PageWrapper/PageWrapper'
import { Text, TextAlign } from '6_shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'

const Main = (): JSX.Element => {
    const { t } = useTranslation('main')

    return (
        <PageWrapper>
            <Text title={t('Главная страница')} align={TextAlign.LEFT} />
        </PageWrapper>
    )
}

export default Main
