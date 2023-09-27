import { type ArticleView, type IArticle } from '5_entities/Article'
import { type EntityState } from '@reduxjs/toolkit'

export interface ArticlesPageSchema extends EntityState<IArticle> {
    isLoading?: boolean
    error?: string
    view: ArticleView
    _inited: boolean

    // pagination
    limit?: number
    page: number
    hasMore: boolean
}
