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
}

export const ArticleProjectDetails = memo((props: ArticleProjectDetailsProps) => {
    const { article } = props

    const { data, img, title } = article

    return (
        <Card>
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
        </Card>
    )
})
