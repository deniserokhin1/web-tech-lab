import { useAppDispatch, useAppSelector } from '@/1_app/providers/StoreProvider'
import { useInitialEffect } from '@/6_shared/hooks/useInitialEffect'
import { IconComponent } from '@/6_shared/lib'
import {
    DynamicModuleLoader,
    type ReducersList,
} from '@/6_shared/lib/components/DynamicModuleLoader'
import { Avatar } from '@/6_shared/ui/Avatar/Avatar'
import { Skeleton } from '@/6_shared/ui/Skeleton/Skeleton'
import { HStack, VStack } from '@/6_shared/ui/Stack'
import { Text, TextAlign, TextSize } from '@/6_shared/ui/Text/Text'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/getArticleDetails'
import { fetchArticleById } from '../../model/services/fetchArticleById'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { ArticleDataType, type ArticleData } from '../../model/types/article'
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock'
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock'
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock'

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
}

interface ArticleDetailsProps {
    className?: string
    id: string
    color?: string
}

const renderBlock = (block: ArticleData): JSX.Element | null => {
    const { type, id } = block

    switch (type) {
        case ArticleDataType.CODE:
            return <ArticleCodeBlock block={block} key={id} />
        case ArticleDataType.IMAGE:
            return <ArticleImageBlock block={block} key={id} />
        case ArticleDataType.TEXT:
            return <ArticleTextBlock block={block} key={id} />
        default:
            return null
    }
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
                <Skeleton height={300} width="100%" borderRadius={'8px'} />
                <Skeleton
                    width={300}
                    height={40}
                    borderRadius="4px"
                    type="short"
                />
                <Skeleton
                    width={300}
                    height={32}
                    borderRadius="4px"
                    type="short"
                />
                <Skeleton
                    width={300}
                    height={30}
                    borderRadius="4px"
                    type="short"
                />
                <Skeleton width="100%" height={200} borderRadius="4px" />
                <Skeleton width="100%" height={200} borderRadius="4px" />
                <Skeleton width="100%" height={200} borderRadius="4px" />
            </VStack>
        )
    } else if (error) {
        content = <Text title={t('article-details.Статья не найдена')} />
    } else {
        content = (
            <VStack gap="16">
                <Avatar
                    height={300}
                    width="100%"
                    src={article?.img}
                    borderRadius={'8px'}
                />
                <Text
                    title={article?.title}
                    align={TextAlign.LEFT}
                    size={TextSize.L}
                />
                <Text
                    text={article?.subtitle}
                    align={TextAlign.LEFT}
                    size={TextSize.L}
                />

                <HStack gap="16">
                    <HStack gap="8">
                        <IconComponent name="calendar" pathFill={color} />
                        <Text text={article?.dataCreate} minWidth={true} />
                    </HStack>

                    <HStack gap="8">
                        <IconComponent name="eye" pathFill={color} />
                        <Text
                            text={article?.views.toString()}
                            minWidth={true}
                        />
                    </HStack>
                </HStack>

                {article?.data?.map(renderBlock)}
            </VStack>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            {content}
        </DynamicModuleLoader>
    )
})
