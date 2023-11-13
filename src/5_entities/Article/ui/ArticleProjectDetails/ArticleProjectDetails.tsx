import { memo } from 'react'

import { AppImage } from '@/6_shared/ui/AppImage'
import { Card } from '@/6_shared/ui/Card'
import { Skeleton } from '@/6_shared/ui/Skeleton'
import { VStack } from '@/6_shared/ui/Stack'
import { Text, TextAlign } from '@/6_shared/ui/Text'

import { renderArticleBlock } from '../../model/services/renderBlock'
import { IArticleProject } from '../../model/types/article'

import cls from './ArticleProjectDetails.module.scss'

interface ArticleProjectDetailsProps {
    article: IArticleProject
    isLoading?: boolean
}

export const ArticleProjectDetails = memo((props: ArticleProjectDetailsProps) => {
    const { article, isLoading } = props

    const { data, img, title } = article

    let content = null

    if (isLoading) {
        content = (
            <VStack gap="16" max={true}>
                <Skeleton width={300} height={40} borderRadius={4} type="short" />
                <Skeleton width="100%" height={64} borderRadius={4} type="short" />
                <Skeleton className={cls.img} />
                <Skeleton width={300} height={30} borderRadius={4} type="short" />
                <Skeleton width="100%" height={200} borderRadius={4} />
                <Skeleton width="100%" height={200} borderRadius={4} />
                <Skeleton width="100%" height={200} borderRadius={4} />
            </VStack>
        )
    } else {
        content = (
            <VStack gap="8" max={true}>
                <Text title={title} align={TextAlign.LEFT} />
                {!!article?.subtitle && <Text text={article?.subtitle} align={TextAlign.LEFT} />}

                <AppImage
                    fallback={<Skeleton width="100%" className={cls.img} />}
                    errorFallback={<Skeleton width="100%" className={cls.img} />}
                    className={cls.img}
                    src={img}
                />

                {data.map(renderArticleBlock)}
            </VStack>
        )
    }

    return <Card>{content}</Card>
})
