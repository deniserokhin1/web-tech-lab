import { createAsyncThunk } from '@reduxjs/toolkit'
import { type StateSchema, type ThunkConfig } from '1_app/providers/StoreProvider/config/StateSchema'
import { type IArticle } from '5_entities/Article'
import { getArticlesPageLimit } from '../selectors/getArticlesPage'

interface FetchArticlesListProps {
    page?: number
}

export const fetchArticlesList = createAsyncThunk<IArticle[], FetchArticlesListProps, ThunkConfig<string>>(
    'articlesPage/fetchArticlesList',
    async (props, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi
        const { page = 1 } = props
        const limit = getArticlesPageLimit(getState() as StateSchema)

        try {
            const response = await extra.api.get<IArticle[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
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
