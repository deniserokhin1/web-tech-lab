import { memo } from 'react'

import { useAppDispatch, useAppSelector } from '@/1_app/providers/StoreProvider'
import { ArticleProjectDetails } from '@/5_entities/Article'
import { useInitialEffect } from '@/6_shared/hooks/useInitialEffect'
import { DynamicModuleLoader, ReducersList } from '@/6_shared/lib/components/DynamicModuleLoader'
import { Card } from '@/6_shared/ui/Card'
import { Skeleton } from '@/6_shared/ui/Skeleton'
import { VStack } from '@/6_shared/ui/Stack'

import {
    getArticleProjectListData,
    getArticleProjectListIsLoading,
} from '../../model/selectors/getArticlesProject'
import { fetchArticlesProjectList } from '../../model/services/fetchArticlesProjectList'
import { articlesProjectListReducer } from '../../model/slices/articlesProjectListSlice'

import cls from './ArticlesProjectList.module.scss'

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

    let skeleton = null

    if (isLoading) {
        skeleton = (
            <Card>
                <VStack gap="8" max={true}>
                    <Skeleton className={cls.img} />
                    <Skeleton width={300} height={40} borderRadius={4} type="short" />
                    <Skeleton width="100%" height={64} borderRadius={4} type="short" />
                    <Skeleton width="100%" height={200} borderRadius={4} />
                    <Skeleton width="100%" height={200} borderRadius={4} />
                    <Skeleton width="100%" height={200} borderRadius={4} />
                </VStack>
            </Card>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack gap="16">
                {data.map((article) => (
                    <ArticleProjectDetails article={article} key={article.id} />
                ))}
                {isLoading && skeleton}
            </VStack>
        </DynamicModuleLoader>
    )
})
