import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/1_app/providers/StoreProvider/config/StateSchema'
import { IArticleProject } from '@/5_entities/Article'

export const fetchArticlesProjectList = createAsyncThunk<IArticleProject[], void, ThunkConfig<string>>(
    'articlesProjectList/fetchArticlesProjectList',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi

        try {
            const response = await extra.api.get<IArticleProject[]>('/about')

            if (!response.data) throw new Error()

            return response.data
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error)
            return rejectWithValue('Error while fetching articles project list.')
        }
    },
)
