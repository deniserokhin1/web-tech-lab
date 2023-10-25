import { memo } from 'react'
import { classNames } from '@/6_shared/lib'
import { useTranslation } from 'react-i18next'
import cls from './ArticleEditPage.module.scss'
import { PageWrapper } from '@/3_widgets/PageWrapper'
import { useParams } from 'react-router-dom'
import { Text, TextAlign } from '@/6_shared/ui/Text'

interface ArticleEditPageProps {
    className?: string
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const { className } = props

    const { id } = useParams<{ id: string }>()
    const isEdit = Boolean(id)

    const namespace = __IS_DEV__ ? 'translation' : 'article-details'
    const { t } = useTranslation(namespace)

    const title = isEdit
        ? t('article-details.Редактирование статьи') + ` –– id ${id}`
        : t('article-details.Создание новой статьи')

    const mods = {}

    return (
        <PageWrapper className={classNames(cls.container, mods, [className])}>
            <Text title={title} align={TextAlign.LEFT} />
        </PageWrapper>
    )
})

export default ArticleEditPage
