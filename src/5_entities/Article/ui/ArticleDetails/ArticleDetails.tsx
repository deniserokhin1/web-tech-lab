import { memo } from 'react'

import { useTranslation } from 'react-i18next'

import { useAppDispatch, useAppSelector } from '@/1_app/providers/StoreProvider'
import { useInitialEffect } from '@/6_shared/hooks/useInitialEffect'
import { IconComponent } from '@/6_shared/lib'
import {
    DynamicModuleLoader,
    type ReducersList,
} from '@/6_shared/lib/components/DynamicModuleLoader'
import { AppImage } from '@/6_shared/ui/AppImage'
import { Skeleton } from '@/6_shared/ui/Skeleton'
import { HStack, VStack } from '@/6_shared/ui/Stack'
import { Text, TextAlign, TextSize } from '@/6_shared/ui/Text'

import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/getArticleDetails'
import { fetchArticleById } from '../../model/services/fetchArticleById'
import { renderArticleBlock } from '../../model/services/renderBlock'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'

import cls from './ArticleDetails.module.scss'

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
}

interface ArticleDetailsProps {
    className?: string
    id: string
    color?: string
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { id, color } = props
    const dispatch = useAppDispatch()

    const isLoading = useAppSelector(getArticleDetailsIsLoading)
    const error = useAppSelector(getArticleDetailsError)
    const article = useAppSelector(getArticleDetailsData)

    useInitialEffect(() => {
        dispatch(fetchArticleById(id))
    })

    const namespace = __IS_DEV__ ? 'translation' : 'article-details'
    const { t } = useTranslation(namespace)

    let content = null

    if (isLoading) {
        content = (
            <VStack gap="16" max={true}>
                <Skeleton className={cls.img} />
                <Skeleton width={300} height={40} borderRadius={4} type="short" />
                <Skeleton width={300} height={32} borderRadius={4} type="short" />
                <Skeleton width={300} height={30} borderRadius={4} type="short" />
                <Skeleton width="100%" height={200} borderRadius={4} />
                <Skeleton width="100%" height={200} borderRadius={4} />
                <Skeleton width="100%" height={200} borderRadius={4} />
            </VStack>
        )
    } else if (error) {
        content = <Text title={t('Статья не найдена')} />
    } else {
        content = (
            <VStack gap="16" max={true}>
                <AppImage
                    fallback={<Skeleton width="100%" className={cls.img} />}
                    errorFallback={<Skeleton width="100%" className={cls.img} />}
                    className={cls.img}
                    src={article?.img}
                />
                <Text title={article?.title} align={TextAlign.LEFT} size={TextSize.L} />
                <Text text={article?.subtitle} align={TextAlign.LEFT} size={TextSize.L} />

                <HStack gap="16">
                    <HStack gap="8">
                        <IconComponent name="calendar" pathFill={color} />
                        <Text text={article?.dataCreate} minWidth={true} />
                    </HStack>

                    <HStack gap="8">
                        <IconComponent name="eye" pathFill={color} />
                        <Text text={article?.views.toString()} minWidth={true} />
                    </HStack>
                </HStack>

                {article?.data?.map(renderArticleBlock)}
            </VStack>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            {content}
        </DynamicModuleLoader>
    )
})
