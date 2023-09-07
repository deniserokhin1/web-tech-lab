import { memo } from 'react'
import { useTranslation } from 'react-i18next'

const Main = memo((): JSX.Element => {
    const { t } = useTranslation('main')

    return <div>{t('Главная страница')}</div>
})

export default Main
