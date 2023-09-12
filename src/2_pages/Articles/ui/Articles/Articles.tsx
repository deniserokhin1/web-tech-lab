import { memo } from 'react'
import { classNames } from '6_shared/lib'
import { useTranslation } from 'react-i18next'
import cls from './Articles.module.scss'
import { Text } from '6_shared/ui/Text/Text'

interface ArticlesProps {
    className?: string
}

const Articles = memo((props: ArticlesProps) => {
    const { className } = props

    const namespace = __IS_DEV__ ? 'translation' : 'namespace'
    const { t } = useTranslation(namespace)

    const mods = {}

    return (
        <div className={classNames(cls.container, mods, [className])}>
            <Text title="ARTICLES" />
        </div>
    )
})

export default Articles
