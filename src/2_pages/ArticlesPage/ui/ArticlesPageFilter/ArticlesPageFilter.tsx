import { memo, useCallback } from 'react'

import { useTranslation } from 'react-i18next'

import { useAppDispatch, useAppSelector } from '@/1_app/providers/StoreProvider'
import { ArticleViewSelector } from '@/4_features/ArticleViewSelector'
import { getUIMainColor } from '@/4_features/UI'
import {
    ArticleSortSelector,
    ArticleTypeTabs,
    type ArticleSortFeild,
    type ArticleType,
    type ArticleView,
} from '@/5_entities/Article'
import { routePath } from '@/6_shared/const/router'
import { useDebouce } from '@/6_shared/hooks/useDebounce'
import { IconComponent, classNames } from '@/6_shared/lib'
import { type SortOrder } from '@/6_shared/types'
import { AppLink } from '@/6_shared/ui/AppLink'
import { Input } from '@/6_shared/ui/Input'
import { HStack } from '@/6_shared/ui/Stack'

import {
    getArticlesPageFilter,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView,
} from '../../model/selectors/getArticlesPage'
import { fetchArticlesList } from '../../model/services/fetchArticlesList'
import { articlesPageActions } from '../../model/slice/articlesPageSlice'

import cls from './ArticlesPageFilter.module.scss'

const namespace = __IS_DEV__ ? 'translation' : 'articles-list'

interface ArticlesPageFilterProps {
    className?: string
}

export const ArticlesPageFilters = memo((props: ArticlesPageFilterProps) => {
    const { className } = props
    const dispatch = useAppDispatch()
    const { setView, setFilter, setSort, setSearch, setPage, setType } = articlesPageActions
    const view = useAppSelector(getArticlesPageView)
    const order = useAppSelector(getArticlesPageSort)
    const filter = useAppSelector(getArticlesPageFilter)
    const search = useAppSelector(getArticlesPageSearch)
    const type = useAppSelector(getArticlesPageType)
    const primaryColor = useAppSelector(getUIMainColor)

    const { t } = useTranslation(namespace)

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }))
    }, [dispatch])

    const debouncedFetchData = useDebouce(fetchData, 500)

    const onChangeArticleView = useCallback(
        (view: ArticleView) => () => {
            dispatch(setView(view))
        },
        [dispatch, setView],
    )

    const onChangeSort = useCallback(
        (order: SortOrder): void => {
            dispatch(setSort(order))
            dispatch(setPage(1))
            fetchData()
        },
        [dispatch, fetchData, setPage, setSort],
    )

    const onChangeFilter = useCallback(
        (filter: ArticleSortFeild): void => {
            dispatch(setFilter(filter))
            dispatch(setPage(1))
            fetchData()
        },
        [dispatch, fetchData, setFilter, setPage],
    )

    const onChangeSearch = useCallback(
        (search: string): void => {
            dispatch(setSearch(search))
            dispatch(setPage(1))
            debouncedFetchData()
        },
        [debouncedFetchData, dispatch, setPage, setSearch],
    )

    const onChangeType = useCallback(
        (typeParam: ArticleType): void => {
            if (typeParam === type) return
            dispatch(setType(typeParam))
            dispatch(setPage(1))
            fetchData()
        },
        [dispatch, fetchData, setPage, setType, type],
    )

    const mods = {}

    return (
        <div className={classNames(cls.container, mods, [className])}>
            <HStack className={cls.wrapper}>
                <div className={cls.leftSide}>
                    <HStack gap="16">
                        <AppLink to={routePath.article_create()} style={{ display: 'none' }}>
                            <IconComponent name="add" pathFill={primaryColor} />
                        </AppLink>

                        <ArticleTypeTabs onChangeType={onChangeType} value={type} />
                    </HStack>

                    <ArticleSortSelector
                        order={order}
                        sort={filter}
                        onChangeOrder={onChangeSort}
                        onChangeSort={onChangeFilter}
                    />
                </div>

                <ArticleViewSelector view={view} onViewClick={onChangeArticleView} />
            </HStack>

            <Input placeholder={t('Поиск по статьям')} onChange={onChangeSearch} value={search} />
        </div>
    )
})
