import { type ArticleView, type IArticle } from '@/5_entities/Article'
import { type ArticleType, type ArticleSortFeild } from '@/5_entities/Article/model/types/article'
import { type SortOrder } from '@/6_shared/types'
import { type EntityState } from '@reduxjs/toolkit'

export interface ArticlesPageSchema extends EntityState<IArticle> {
    isLoading?: boolean
    error?: string
    view: ArticleView
    _inited: boolean

    // pagination
    limit: number
    page: number
    hasMore: boolean

    // sort and filter
    sort: SortOrder
    filter: ArticleSortFeild
    search: string
    type: ArticleType
}
