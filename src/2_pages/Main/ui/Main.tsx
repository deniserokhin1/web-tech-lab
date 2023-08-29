import { Button } from '6_shared/ui/Button'
import { ButtonTheme } from '6_shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

const Main = (): JSX.Element => {
    const { t } = useTranslation('main')

    return (
        <>
            <div>{t('Главная страница')}</div>
            <Button children="Test" theme={ButtonTheme.OUTLINE} />
        </>
    )
}

export default Main
