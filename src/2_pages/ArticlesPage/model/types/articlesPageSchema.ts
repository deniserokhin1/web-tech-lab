import { type EntityState } from '@reduxjs/toolkit'

import {
    type ArticleView,
    type IArticle,
    type ArticleType,
    type ArticleSortFeild,
} from '@/5_entities/Article'
import { type SortOrder } from '@/6_shared/types'

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
