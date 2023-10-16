import { ArticleList } from '@/5_entities/Article'
import { VStack } from '@/6_shared/ui/Stack'
import { Text, TextAlign } from '@/6_shared/ui/Text/Text'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useArticleRecomendationList } from '../../api/artilceRecomendationApi'
import cls from './ArticleRecomendationList.module.scss'

const namespace = __IS_DEV__ ? 'translation' : 'article-details'

interface ArticleRecomendationListProps {
    className?: string
}

export const ArticleRecomendationList = memo((props: ArticleRecomendationListProps) => {
    const { t } = useTranslation(namespace)

    const { isLoading, data: articles, error } = useArticleRecomendationList(10)

    if (isLoading || error) return null

    return (
        <VStack gap="16" max={true}>
            <Text title={t('article-details.Рекомендуем')} align={TextAlign.LEFT} />

            <ArticleList
                articles={articles}
                className={cls.recommendations}
                target="_blank"
                isLoading={isLoading}
                padding={10}
            />
        </VStack>
    )
})
