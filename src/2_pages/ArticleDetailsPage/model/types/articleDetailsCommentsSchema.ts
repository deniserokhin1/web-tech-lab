import { type IComment } from '@/5_entities/Comment'
import { type EntityState } from '@reduxjs/toolkit'

export interface ArticleDetailsCommentsSchema extends EntityState<IComment> {
    isLoading?: boolean
    error?: string
}
