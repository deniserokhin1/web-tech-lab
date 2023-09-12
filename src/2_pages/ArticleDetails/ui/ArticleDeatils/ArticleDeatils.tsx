import { memo } from 'react'
import { classNames } from '6_shared/lib'
import { useTranslation } from 'react-i18next'
import cls from './ArticleDeatils.module.scss'
import { Text } from '6_shared/ui/Text/Text'

interface ArticleDeatilsProps {
    className?: string
}

const ArticleDeatils = (props: ArticleDeatilsProps): JSX.Element => {
    const { className } = props

    const namespace = __IS_DEV__ ? 'translation' : 'article'
    const { t } = useTranslation(namespace)

    const mods = {}

    return (
        <div className={classNames(cls.container, mods, [className])}>
            <Text title="ARTICLE DETAILS" />
        </div>
    )
}

export default memo(ArticleDeatils)
