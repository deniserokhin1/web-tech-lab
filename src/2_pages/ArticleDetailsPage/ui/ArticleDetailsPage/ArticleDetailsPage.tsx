import { memo } from 'react'
import { classNames } from '6_shared/lib'
import { useTranslation } from 'react-i18next'
import cls from './ArticleDetailsPage.module.scss'
import { ArticleDetails } from '5_entities/Article'
import { useParams } from 'react-router-dom'

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage = memo((props: ArticleDetailsPageProps) => {
    const { className } = props
    
    const namespace = __IS_DEV__ ? 'translation' : 'articles-details'
    const { t } = useTranslation(namespace)

    const { id } = useParams<{ id: string }>()

    if (!id) {
        return (
            <div className={classNames(cls.container, {}, [className])}>
                {t('articles-details.Статья не найдена')}
            </div>
        )
    }

    return (
        <div className={classNames(cls.container, {}, [className])}>
            <ArticleDetails id={id} />
        </div>
    )
})

export default ArticleDetailsPage
