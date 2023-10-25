import { memo, useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '@/1_app/providers/StoreProvider'
import { ArticleList } from '@/5_entities/Article'

import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageLimit,
    getArticlesPageNum,
    getArticlesPageView,
} from '../../model/selectors/getArticlesPage'
import { fetchArticlesList } from '../../model/services/fetchArticlesList'
import { articlesPageActions, getArticles } from '../../model/slice/articlesPageSlice'

interface ArticleInfiniteListProps {
    className?: string
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const articles = useAppSelector(getArticles.selectAll)
    const isLoading = useAppSelector(getArticlesPageIsLoading)
    const view = useAppSelector(getArticlesPageView)
    const limit = useAppSelector(getArticlesPageLimit)
    const page = useAppSelector(getArticlesPageNum)
    const hasMore = useAppSelector(getArticlesPageHasMore)
    const dispatch = useAppDispatch()

    const { setPage } = articlesPageActions

    useEffect(() => {
        if (!limit || !articles.length || !hasMore || isLoading) return

        if (articles.length !== limit * page) {
            dispatch(setPage(1))
            dispatch(fetchArticlesList({ replace: true }))
        }
    }, [limit, articles, hasMore, dispatch, page, isLoading, setPage])

    return <ArticleList articles={articles} view={view} isLoading={isLoading} />
})
