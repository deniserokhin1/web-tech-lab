import { type PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit'

import { type StateSchema } from '@/1_app/providers/StoreProvider'
import { type IComment } from '@/5_entities/Comment'

import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId'
import { type ArticleDetailsCommentsSchema } from '../types/articleDetailsCommentsSchema'

const commentsAdapter = createEntityAdapter<IComment>({
    selectId: (comment) => comment.id,
})

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDeatailsPage?.comments || commentsAdapter.getInitialState(),
)

const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
        isLoading: false,
        entities: {},
        ids: [],
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<IComment[]>) => {
                state.isLoading = false
                commentsAdapter.setAll(state, action.payload)
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions, reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice
