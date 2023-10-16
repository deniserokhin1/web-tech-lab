import { type IArticle } from '@/5_entities/Article'
import { type EntityState } from '@reduxjs/toolkit'

export interface ArticleDetailsRecommendationsSchema extends EntityState<IArticle> {
    isLoading?: boolean
    error?: string
}
