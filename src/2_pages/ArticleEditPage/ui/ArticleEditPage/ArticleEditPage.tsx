import { memo } from 'react'

import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import { PageWrapper } from '@/3_widgets/PageWrapper'
import { classNames } from '@/6_shared/lib'
import { Text, TextAlign } from '@/6_shared/ui/Text'

import cls from './ArticleEditPage.module.scss'

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
        ? t('Редактирование статьи') + ` –– id ${id}`
        : t('Создание новой статьи')

    const mods = {}

    return (
        <PageWrapper className={classNames(cls.container, mods, [className])}>
            <Text title={title} align={TextAlign.LEFT} />
        </PageWrapper>
    )
})

export default ArticleEditPage
