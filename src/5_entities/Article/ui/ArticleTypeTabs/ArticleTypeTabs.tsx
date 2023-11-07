import { memo, useMemo } from 'react'

import { useTranslation } from 'react-i18next'

import { type TabItem, Tabs } from '@/6_shared/ui/Tabs'

import { ArticleType } from '../../model/types/article'

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
                content: t('Все'),
                value: ArticleType.ALL,
            },
            {
                content: t('АЙТИ'),
                value: ArticleType.IT,
            },
            {
                content: t('Экономика'),
                value: ArticleType.ECONOMICS,
            },
            {
                content: t('Наука'),
                value: ArticleType.SCIENCE,
            },
        ],
        [t],
    )

    return <Tabs onTabClick={onChangeType} tabs={typeTabs} value={value} />
})
