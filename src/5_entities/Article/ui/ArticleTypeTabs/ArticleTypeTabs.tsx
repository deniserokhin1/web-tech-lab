import { memo, useMemo } from 'react'
import { type TabItem, Tabs } from '6_shared/ui/Tabs/Tabs'
import { ArticleType } from '../../model/types/article'
import { useTranslation } from 'react-i18next'

interface ArticleTypeTabsProps {
    className?: string
    value: ArticleType
    onChangeType: (type: ArticleType) => void
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { value, onChangeType } = props

    const namespace = __IS_DEV__ ? 'translation' : 'articles-list'
    const { t } = useTranslation(namespace)

    const typeTabs = useMemo<Array<TabItem<ArticleType>>>(
        () => [
            {
                content: t('articles-list.Все'),
                value: ArticleType.ALL,
            },
            {
                content: t('articles-list.АЙТИ'),
                value: ArticleType.IT,
            },
            {
                content: t('articles-list.Экономика'),
                value: ArticleType.ECONOMICS,
            },
            {
                content: t('articles-list.Наука'),
                value: ArticleType.SCIENCE,
            },
        ],
        [t],
    )

    return <Tabs onTabClick={onChangeType} tabs={typeTabs} value={value} />
})
