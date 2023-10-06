import { useAppSelector } from '1_app/providers/StoreProvider'
import { ArticleList } from '5_entities/Article'
import { memo } from 'react'
import {
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/getArticlesPage'
import { getArticles } from '../../model/slice/articlesPageSlice'

interface ArticleInfiniteListProps {
    className?: string
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const articles = useAppSelector(getArticles.selectAll)
    const isLoading = useAppSelector(getArticlesPageIsLoading)
    const view = useAppSelector(getArticlesPageView)

    return <ArticleList articles={articles} view={view} isLoading={isLoading} />
})
