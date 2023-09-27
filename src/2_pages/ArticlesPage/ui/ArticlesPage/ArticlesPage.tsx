import { memo, useCallback } from 'react'
import cls from './ArticlesPage.module.scss'
import { ArticleList } from '5_entities/Article/ui/ArticleList/ArticleList'
import { DynamicModuleLoader, type ReducersList } from '6_shared/lib/components/DynamicModuleLoader'
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slice/articlesPageSlice'
import { useAppDispatch, useAppSelector } from '1_app/providers/StoreProvider'
import { useInitialEffect } from '6_shared/hooks/useInitialEffect'
import { getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors/getArticlesPage'
import { ArticleViewSelector } from '4_features/ArticleViewSelector'
import { type ArticleView } from '5_entities/Article'
import { PageWrapper } from '3_widgets/PageWrapper/PageWrapper'
import { fetchNextArticlesPage } from '../../model/services/fecthNextArticlePage'
import { initArticlesPage } from '../../model/services/initArticlesPage'

interface ArticlesPageProps {
    className?: string
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
}

const ArticlesPage = memo((props: ArticlesPageProps) => {
    const dispatch = useAppDispatch()
    const { setView } = articlesPageActions
    const articles = useAppSelector(getArticles.selectAll)

    const isLoading = useAppSelector(getArticlesPageIsLoading)
    const view = useAppSelector(getArticlesPageView)

    const onLoadNextPart = useCallback(() => {
        if (__PROJECT__ === 'storybook') return
        dispatch(fetchNextArticlesPage())
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(initArticlesPage())
    })

    const onChangeArticleView = (view: ArticleView): void => {
        dispatch(setView(view))
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <div className={cls.controls}>
                <ArticleViewSelector view={view} onViewClick={onChangeArticleView} />
            </div>
            <PageWrapper onScrollEnd={onLoadNextPart} offsetTop={true}>
                <ArticleList articles={articles} view={view} isLoading={isLoading} />
            </PageWrapper>
        </DynamicModuleLoader>
    )
})

export default ArticlesPage
