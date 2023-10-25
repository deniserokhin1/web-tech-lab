import { memo, useMemo } from 'react'

import { useTranslation } from 'react-i18next'

import { classNames } from '@/6_shared/lib'
import { type SortOrder } from '@/6_shared/types'
import { Select, type SelectOption } from '@/6_shared/ui/Select'
import { HStack } from '@/6_shared/ui/Stack'

import { ArticleSortFeild } from '../../model/types/article'

interface ArticleSortSelectorProps {
    className?: string
    sort: ArticleSortFeild
    order: SortOrder
    onChangeOrder: (newOrder: SortOrder) => void
    onChangeSort: (newSort: ArticleSortFeild) => void
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const { className, onChangeOrder, onChangeSort, order, sort } = props

    const namespace = __IS_DEV__ ? 'translation' : 'article-details'
    const { t } = useTranslation(namespace)

    const orderOptions = useMemo<Array<SelectOption<SortOrder>>>(
        () => [
            {
                value: 'asc',
                content: t('article-details.возрастанию'),
            },
            {
                value: 'desc',
                content: t('article-details.убыванию'),
            },
        ],
        [t],
    )

    const sortFeildOptions = useMemo<Array<SelectOption<ArticleSortFeild>>>(
        () => [
            {
                value: ArticleSortFeild.CREATED,
                content: t('article-details.дате создания'),
            },
            {
                value: ArticleSortFeild.TITLE,
                content: t('article-details.названию'),
            },
            {
                value: ArticleSortFeild.VIEWS,
                content: t('article-details.просмотрам'),
            },
        ],
        [t],
    )

    const mods = {}

    return (
        <HStack gap="16" className={classNames('', mods, [className])}>
            <Select
                label={t('article-details.Сортировать по')}
                options={sortFeildOptions}
                labelFitContent={true}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                label={t('article-details.по')}
                options={orderOptions}
                labelFitContent={true}
                value={order}
                onChange={onChangeOrder}
            />
        </HStack>
    )
})
