import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '1_app/providers/StoreProvider/config/StateSchema'
import { type IArticle } from '../types/article'

export const fetchArticleById = createAsyncThunk<IArticle, string, ThunkConfig<string>>(
    'articleDetails/fetchArticleById',
    async (articleId, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi
        try {
            const response = await extra.api.get<IArticle>(`/articles/${articleId}`)

            if (!response.data) throw new Error()

            return response.data
        } catch (error) {
            console.log(error)
            return rejectWithValue('Error')
        }
    },
)
