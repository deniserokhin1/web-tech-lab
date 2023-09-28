import { memo, useCallback } from 'react'
import { ArticleList } from '5_entities/Article/ui/ArticleList/ArticleList'
import { DynamicModuleLoader, type ReducersList } from '6_shared/lib/components/DynamicModuleLoader'
import { articlesPageReducer, getArticles } from '../../model/slice/articlesPageSlice'
import { useAppDispatch, useAppSelector } from '1_app/providers/StoreProvider'
import { useInitialEffect } from '6_shared/hooks/useInitialEffect'
import { getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors/getArticlesPage'
import { PageWrapper } from '3_widgets/PageWrapper/PageWrapper'
import { fetchNextArticlesPage } from '../../model/services/fecthNextArticlePage'
import { initArticlesPage } from '../../model/services/initArticlesPage'
import { ArticlesPageFilters } from '../ArticlesPageFilter/ArticlesPageFilter'
import { useSearchParams } from 'react-router-dom'

interface ArticlesPageProps {
    className?: string
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
}

const ArticlesPage = memo((props: ArticlesPageProps) => {
    const dispatch = useAppDispatch()
    const articles = useAppSelector(getArticles.selectAll)

    const isLoading = useAppSelector(getArticlesPageIsLoading)
    const view = useAppSelector(getArticlesPageView)

    const [searchParams] = useSearchParams()

    const onLoadNextPart = useCallback(() => {
        if (__PROJECT__ === 'storybook') return
        dispatch(fetchNextArticlesPage())
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams))
    })

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <PageWrapper onScrollEnd={onLoadNextPart}>
                <ArticlesPageFilters />
                <ArticleList articles={articles} view={view} isLoading={isLoading} />
            </PageWrapper>
        </DynamicModuleLoader>
    )
})

export default ArticlesPage
