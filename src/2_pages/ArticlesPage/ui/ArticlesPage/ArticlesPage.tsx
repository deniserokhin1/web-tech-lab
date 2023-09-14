import { memo } from 'react'
import { classNames } from '6_shared/lib'
import { useTranslation } from 'react-i18next'
import cls from './ArticlesPage.module.scss'

interface ArticlesPageProps {
    className?: string
}

const ArticlesPage = memo((props: ArticlesPageProps) => {
    const { className } = props

    const namespace = __IS_DEV__ ? 'translation' : 'namespace'
    const { t } = useTranslation(namespace)

    const mods = {}

    return <div className={classNames(cls.container, mods, [className])}></div>
})

export default ArticlesPage
