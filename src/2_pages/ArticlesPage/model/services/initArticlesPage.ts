import { createAsyncThunk } from '@reduxjs/toolkit'
import {
    type StateSchema,
    type ThunkConfig,
} from '1_app/providers/StoreProvider/config/StateSchema'
import { getArticlesPageInited } from '../selectors/getArticlesPage'
import { articlesPageActions } from '../slice/articlesPageSlice'
import { fetchArticlesList } from './fetchArticlesList'
import { type SortOrder } from '6_shared/types'
import { type ArticleType, type ArticleSortFeild } from '5_entities/Article'

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>('articlesPage/initArticlesPage', async (searchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi

    const { initView, setFilter, setSearch, setSort, setType } = articlesPageActions
    const inited = getArticlesPageInited(getState() as StateSchema)

    if (inited) return
    const orderFromUrl = searchParams.get('order') as SortOrder
    const sortFromUrl = searchParams.get('filter') as ArticleSortFeild
    const searchFromUrl = searchParams.get('search')
    const typeFromUrl = searchParams.get('type') as ArticleType

    if (orderFromUrl) dispatch(setSort(orderFromUrl))
    if (sortFromUrl) dispatch(setFilter(sortFromUrl))
    if (searchFromUrl) dispatch(setSearch(searchFromUrl))
    if (typeFromUrl) dispatch(setType(typeFromUrl))

    dispatch(initView())
    dispatch(fetchArticlesList({}))
})
