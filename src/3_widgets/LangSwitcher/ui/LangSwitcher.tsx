import { memo } from 'react'

import { useTranslation } from 'react-i18next'

import { classNames } from '@/6_shared/lib'
import { Button, ButtonTheme } from '@/6_shared/ui/Button'

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = memo((props: LangSwitcherProps) => {
    const { className } = props
    const { t, i18n } = useTranslation()

    const toggle = (): void => {
        if (i18n.language === 'ru-RU') {
            i18n.changeLanguage('en')
            return
        }
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR_INVERT}
            onClick={toggle}
        >
            {t('Язык')}
        </Button>
    )
})
