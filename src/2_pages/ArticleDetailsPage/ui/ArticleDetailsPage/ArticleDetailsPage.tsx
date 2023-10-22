import { useAppDispatch, useAppSelector } from '@/1_app/providers/StoreProvider'
import { PageWrapper } from '@/3_widgets/PageWrapper/PageWrapper'
import { ArticleRating } from '@/4_features/ArticleRating'
import { ArticleRecomendationList } from '@/4_features/ArticleRecomendationList'
import { uiActions } from '@/4_features/UI'
import { getUIMainColor } from '@/4_features/UI/model/selectors/getUI'
import { ArticleDetails } from '@/5_entities/Article'
import {
    DynamicModuleLoader,
    type ReducersList,
} from '@/6_shared/lib/components/DynamicModuleLoader'
import { Card } from '@/6_shared/ui/Card/Card'
import { VStack } from '@/6_shared/ui/Stack'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useParams } from 'react-router-dom'
import { articleDetailsPageReducer } from '../../model/slice'
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import cls from './ArticleDetailsPage.module.scss'

const namespace = __IS_DEV__ ? 'translation' : 'article-details'

interface ArticleDetailsPageProps {
    className?: string
}

const reducers: ReducersList = {
    articleDeatailsPage: articleDetailsPageReducer,
}

const ArticleDetailsPage = memo((props: ArticleDetailsPageProps) => {
    const { id = '1' } = useParams<{ id: string }>()
    const { t } = useTranslation(namespace)
    const color = useAppSelector(getUIMainColor)

    if (!id) {
        return (
            <PageWrapper>{t('article-details.Статья не найдена')}</PageWrapper>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <PageWrapper>
                <ArticleDetailsPageHeader />

                <div className={cls.content}>
                    <Card>
                        <VStack gap="16">
                            <ArticleDetails id={id} color={color} />
                            <ArticleRating articleId={id} />
                            <ArticleRecomendationList />
                            <ArticleDetailsComments id={id} />
                        </VStack>
                    </Card>
                </div>
            </PageWrapper>
        </DynamicModuleLoader>
    )
})

export default ArticleDetailsPage
