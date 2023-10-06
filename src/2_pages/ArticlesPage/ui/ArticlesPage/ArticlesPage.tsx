import { useAppDispatch } from '1_app/providers/StoreProvider'
import { PageWrapper } from '3_widgets/PageWrapper/PageWrapper'
import { useInitialEffect } from '6_shared/hooks/useInitialEffect'
import {
    DynamicModuleLoader,
    type ReducersList,
} from '6_shared/lib/components/DynamicModuleLoader'
import { memo, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import { fetchNextArticlesPage } from '../../model/services/fecthNextArticlePage'
import { initArticlesPage } from '../../model/services/initArticlesPage'
import { articlesPageReducer } from '../../model/slice/articlesPageSlice'
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList'
import { ArticlesPageFilters } from '../ArticlesPageFilter/ArticlesPageFilter'

interface ArticlesPageProps {
    className?: string
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
}

const ArticlesPage = memo((props: ArticlesPageProps) => {
    const dispatch = useAppDispatch()
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
                <ArticleInfiniteList />
            </PageWrapper>
        </DynamicModuleLoader>
    )
})

export default ArticlesPage
