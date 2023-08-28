import type { FC } from 'react'
import { classNames } from '6_shared/lib'
import { useTranslation } from 'react-i18next'

interface TestProps {
    className?: string
}

export const Test: FC<TestProps> = (props) => {
    const { className } = props
    const mods = {}

    const namespace = __IS_DEV__ ? '' : 'main'

    const { t } = useTranslation(namespace)

    return <div className={classNames('', mods, [className])}>{t('Test')}</div>
}
