import { type EntityState } from '@reduxjs/toolkit'

import { type IArticle } from '@/5_entities/Article'

export interface ArticleDetailsRecommendationsSchema extends EntityState<IArticle> {
    isLoading?: boolean
    error?: string
}
