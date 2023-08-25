import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

interface MainProps {}

const Main: FC<MainProps> = () => {
    const { t } = useTranslation('main')

    return <div>{t('Главная страница')}</div>
}

export default Main
