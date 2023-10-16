import { createAsyncThunk } from '@reduxjs/toolkit'
import {
    type StateSchema,
    type ThunkConfig,
} from '@/1_app/providers/StoreProvider/config/StateSchema'
import { ArticleType, type IArticle } from '@/5_entities/Article'
import {
    getArticlesPageFilter,
    getArticlesPageLimit,
    getArticlesPageNum,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
} from '../selectors/getArticlesPage'
import { addQueryParams } from '@/6_shared/lib/url/addQueryParams'

interface FetchArticlesListProps {
    replace?: boolean
}

export const fetchArticlesList = createAsyncThunk<
    IArticle[],
    FetchArticlesListProps,
    ThunkConfig<string>
>('articlesPage/fetchArticlesList', async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi
    const limit = getArticlesPageLimit(getState() as StateSchema)
    const page = getArticlesPageNum(getState() as StateSchema)
    const order = getArticlesPageSort(getState() as StateSchema)
    const filter = getArticlesPageFilter(getState() as StateSchema)
    const search = getArticlesPageSearch(getState() as StateSchema)
    const type = getArticlesPageType(getState() as StateSchema)

    try {
        addQueryParams({ filter, order, search, type })

        const response = await extra.api.get<IArticle[]>('/articles', {
            params: {
                _expand: 'user',
                _limit: limit,
                _page: page,
                _sort: filter,
                _order: order,
                q: search,
                type_like: type === ArticleType.ALL ? undefined : type,
            },
        })

        if (!response.data) throw new Error()

        return response.data
    } catch (error) {
        console.log(error)
        return rejectWithValue('Error while fetching articles.')
    }
})
