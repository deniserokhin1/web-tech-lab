import { combineReducers } from '@reduxjs/toolkit'
import { type ArticleDetailsPageSchema } from '../types'
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice'
import { articleDetailsRecomendationsReducer } from './articleDetailsRecomendationsSlice'

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    comments: articleDetailsCommentsReducer,
    recommendations: articleDetailsRecomendationsReducer,
})
