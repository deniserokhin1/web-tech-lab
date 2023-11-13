import { memo } from 'react'

import { useAppDispatch, useAppSelector } from '@/1_app/providers/StoreProvider'
import { ArticleProjectDetails } from '@/5_entities/Article'
import { useInitialEffect } from '@/6_shared/hooks/useInitialEffect'
import { DynamicModuleLoader, ReducersList } from '@/6_shared/lib/components/DynamicModuleLoader'
import { VStack } from '@/6_shared/ui/Stack'

import {
    getArticleProjectListData,
    getArticleProjectListIsLoading,
} from '../../model/selectors/getArticlesProject'
import { fetchArticlesProjectList } from '../../model/services/fetchArticlesProjectList'
import { articlesProjectListReducer } from '../../model/slices/articlesProjectListSlice'

interface ArticlesProjectListProps {
    className?: string
}

const reducers: ReducersList = {
    articlesProjectList: articlesProjectListReducer,
}

export const ArticlesProjectList = memo((props: ArticlesProjectListProps) => {
    const data = useAppSelector(getArticleProjectListData)
    const isLoading = useAppSelector(getArticleProjectListIsLoading)

    const dispatch = useAppDispatch()

    useInitialEffect(() => {
        dispatch(fetchArticlesProjectList())
    })

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack gap="16">
                {data.map((article) => (
                    <ArticleProjectDetails
                        article={article}
                        key={article.id}
                        isLoading={isLoading}
                    />
                ))}
            </VStack>
        </DynamicModuleLoader>
    )
})
