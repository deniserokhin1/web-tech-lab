import { useTranslation } from 'react-i18next'


export const Loading = (): JSX.Element => {
    const { t } = useTranslation()

    return <h2 className="loader">{t('Загрузка')}</h2>
}