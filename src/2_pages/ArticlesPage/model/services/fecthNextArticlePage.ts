import { createAsyncThunk } from '@reduxjs/toolkit'

import {
    type StateSchema,
    type ThunkConfig,
} from '@/1_app/providers/StoreProvider/config/StateSchema'

import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNum,
} from '../selectors/getArticlesPage'
import { articlesPageActions } from '../slice/articlesPageSlice'

import { fetchArticlesList } from './fetchArticlesList'

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/fetchNextArticlePage',
    async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi
        const hasMore = getArticlesPageHasMore(getState() as StateSchema)
        const page = getArticlesPageNum(getState() as StateSchema)
        const isLoading = getArticlesPageIsLoading(getState() as StateSchema)

        const { setPage } = articlesPageActions

        if (hasMore && !isLoading) {
            dispatch(setPage(page + 1))
            dispatch(fetchArticlesList({}))
        }
    },
)
