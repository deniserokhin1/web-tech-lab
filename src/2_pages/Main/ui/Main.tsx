import { Text, TextAlign } from '@/6_shared/ui/Text'
import { useTranslation } from 'react-i18next'

const Main = (): JSX.Element => {
    const { t } = useTranslation('main')

    return <Text title={t('Главная страница')} align={TextAlign.LEFT} />
}

export default Main
