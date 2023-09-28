import { memo, useCallback } from 'react'
import { classNames } from '6_shared/lib'
import cls from './ArticlesPageFilter.module.scss'
import { ArticleViewSelector } from '4_features/ArticleViewSelector'
import {
    type ArticleSortFeild,
    ArticleSortSelector,
    ArticleTypeTabs,
    type ArticleView,
    type ArticleType,
} from '5_entities/Article'
import { useAppDispatch, useAppSelector } from '1_app/providers/StoreProvider'
import { articlesPageActions } from '../../model/slice/articlesPageSlice'
import {
    getArticlesPageFilter,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView,
} from '../../model/selectors/getArticlesPage'
import { Input } from '6_shared/ui/Input'
import { type SortOrder } from '6_shared/types'
import { useTranslation } from 'react-i18next'
import { fetchArticlesList } from '../../model/services/fetchArticlesList'
import { useDebouce } from '6_shared/hooks/useDebounce'

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

    const namespace = __IS_DEV__ ? 'translation' : 'articles-list'
    const { t } = useTranslation(namespace)

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }))
    }, [dispatch])

    const debouncedFetchData = useDebouce(fetchData, 500)

    const onChangeArticleView = useCallback(
        (view: ArticleView): void => {
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
            <div className={cls.wrapper}>
                <ArticleSortSelector
                    order={order}
                    sort={filter}
                    onChangeOrder={onChangeSort}
                    onChangeSort={onChangeFilter}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeArticleView} />
            </div>
            <Input
                placeholder={t('articles-list.Поиск по статьям')}
                onChange={onChangeSearch}
                value={search}
            />
            <ArticleTypeTabs onChangeType={onChangeType} value={type} />
        </div>
    )
})
