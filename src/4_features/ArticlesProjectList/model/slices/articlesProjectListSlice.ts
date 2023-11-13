import { createSlice } from '@reduxjs/toolkit'

import { fetchArticlesProjectList } from '../services/fetchArticlesProjectList'
import type { ArticlesProjectListSchema } from '../types/articlesProjectListSchema'

const initialState: ArticlesProjectListSchema = {
    isLoading: false,
    data: [],
}

export const articlesProjectListSlice = createSlice({
    name: 'articlesProjectList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesProjectList.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchArticlesProjectList.fulfilled, (state, action) => {
                state.isLoading = false
                state.data = action.payload
            })
            .addCase(fetchArticlesProjectList.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions: articlesProjectListActions } = articlesProjectListSlice
export const { reducer: articlesProjectListReducer } = articlesProjectListSlice
