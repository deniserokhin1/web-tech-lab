import { memo, useEffect } from 'react'
import { IconComponent } from '6_shared/lib'
import { useTranslation } from 'react-i18next'
import cls from './ArticleDetails.module.scss'
import { Text, TextAlign, TextSize } from '6_shared/ui/Text/Text'
import { useAppDispatch, useAppSelector } from '1_app/providers/StoreProvider'
import { fetchArticleById } from '../../model/services/fetchArticleById'
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/getArticleDetails'
import {
    DynamicModuleLoader,
    type ReducersList,
} from '6_shared/lib/components/DynamicModuleLoader'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { Skeleton } from '6_shared/ui/Skeleton/Skeleton'
import { Avatar } from '6_shared/ui/Avatar/Avatar'
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
}

const avatarSize = 200

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
    const { id } = props
    const dispatch = useAppDispatch()

    const isLoading = useAppSelector(getArticleDetailsIsLoading)
    // const isLoading = true
    const error = useAppSelector(getArticleDetailsError)
    const article = useAppSelector(getArticleDetailsData)

    useEffect(() => {
        if (__PROJECT__ === 'storybook') return
        dispatch(fetchArticleById(id))
    }, [dispatch, id])

    const namespace = __IS_DEV__ ? 'translation' : 'articles-details'
    const { t } = useTranslation(namespace)

    let content = null

    if (isLoading) {
        content = (
            <div className={cls.content}>
                <Skeleton
                    width={avatarSize * 2}
                    height={avatarSize}
                    borderRadius="8px"
                    type="short"
                />
                <Skeleton width={300} height={40} borderRadius="4px" type="short" />
                <Skeleton width={300} height={32} borderRadius="4px" type="short" />
                <Skeleton width={300} height={30} borderRadius="4px" type="short" />
                <Skeleton width="100%" height={200} borderRadius="4px" />
                <Skeleton width="100%" height={200} borderRadius="4px" />
                <Skeleton width="100%" height={200} borderRadius="4px" />
            </div>
        )
    } else if (error) {
        content = <Text title={t('articles-details.Статья не найдена')} />
    } else {
        content = (
            <div className={cls.content}>
                <Avatar
                    height={avatarSize}
                    width={avatarSize * 2}
                    src={article?.img}
                    borderRadius={'8px'}
                />
                <Text title={article?.title} align={TextAlign.LEFT} size={TextSize.L} />
                <Text text={article?.subtitle} align={TextAlign.LEFT} size={TextSize.L} />

                <div className={cls.info}>
                    <div className={cls.infoArticle}>
                        <IconComponent name="calendar" />
                        <Text text={article?.dataCreate} minWidth={true} />
                    </div>

                    <div className={cls.infoArticle}>
                        <IconComponent name="eye" />
                        <Text text={article?.views.toString()} minWidth={true} />
                    </div>
                </div>

                {article?.data?.map(renderBlock)}
            </div>
        )
    }

    return <DynamicModuleLoader reducers={reducers}>{content}</DynamicModuleLoader>
})
