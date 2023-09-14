import { Text, TextAlign } from '6_shared/ui/Text/Text'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'

const Main = memo((): JSX.Element => {
    const { t } = useTranslation('main')

    return (
        <div>
            <Text title={t('Главная страница')} align={TextAlign.LEFT} />
        </div>
    )
})

export default Main
