import { createAsyncThunk } from '@reduxjs/toolkit'
import { type StateSchema, type ThunkConfig } from '1_app/providers/StoreProvider/config/StateSchema'
import {
    getArticlesPageInited,
} from '../selectors/getArticlesPage'
import { articlesPageActions } from '../slice/articlesPageSlice'
import { fetchArticlesList } from './fetchArticlesList'

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/initArticlesPage',
    async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi

        const { initView } = articlesPageActions
        const inited = getArticlesPageInited(getState() as StateSchema)

        if (inited) return
        dispatch(initView())
        dispatch(fetchArticlesList({ page: 1 }))
    },
)
