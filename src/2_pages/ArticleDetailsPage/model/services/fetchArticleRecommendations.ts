import { createAsyncThunk } from '@reduxjs/toolkit'

import { type StateSchema, type ThunkConfig } from '@/1_app/providers/StoreProvider/config/StateSchema'
import { getArticlesPageLimit } from '@/2_pages/ArticlesPage'
import { type IArticle } from '@/5_entities/Article'

export const fetchArticleRecommendations = createAsyncThunk<IArticle[], void, ThunkConfig<string>>(
    'articleDetailsPage/fetchArticleRecommendations',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi
        const limit = getArticlesPageLimit(getState() as StateSchema)

        try {
            const response = await extra.api.get<IArticle[]>('/articles', {
                params: {
                    _limit: limit,
                },
            })

            if (!response.data) throw new Error()

            return response.data
        } catch (error) {
            console.log(error)
            return rejectWithValue('Error while fetching articles.')
        }
    },
)
