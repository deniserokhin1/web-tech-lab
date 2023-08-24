import { Button } from '6_shared/ui/Button'
import cls from './LangSwitcher.module.scss'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '6_shared/lib'
import { ButtonTheme } from '6_shared/ui/Button/Button'

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
    const { t, i18n } = useTranslation()

    const toggle = () => {
        if (i18n.language === 'ru-RU') {
            i18n.changeLanguage('en')
            return
        }
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
        >
            {t('Язык')}
        </Button>
    )
}
