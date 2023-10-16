import { type StateSchema } from '@/1_app/providers/StoreProvider'
import {
    ArticleSortFeild,
    ArticleType,
    ArticleView,
    type IArticle,
} from '@/5_entities/Article'
import { type PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { type ArticlesPageSchema } from '../types/articlesPageSchema'
import { fetchArticlesList } from '../services/fetchArticlesList'
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from '@/6_shared/const/localStorage'
import { type SortOrder } from '@/6_shared/types'

const articlesAdapter = createEntityAdapter<IArticle>({
    selectId: (article) => article.id,
})

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState(),
)

const articlePageSlice = createSlice({
    name: 'articlePageSlice',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        view: ArticleView.ROW,
        isLoading: false,
        entities: {},
        ids: [],
        hasMore: true,
        page: 1,
        limit: 10,
        _inited: false,
        search: '',
        sort: 'asc',
        filter: ArticleSortFeild.CREATED,
        type: ArticleType.ALL,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload
            state.limit = action.payload === ArticleView.ROW ? 4 : 9
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload)
        },

        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },

        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        },

        setSort: (state, action: PayloadAction<SortOrder>) => {
            state.sort = action.payload
        },

        setFilter: (state, action: PayloadAction<ArticleSortFeild>) => {
            state.filter = action.payload
        },

        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload
        },

        initView: (state) => {
            const view = localStorage.getItem(
                ARTICLE_VIEW_LOCALSTORAGE_KEY,
            ) as ArticleView
            state._inited = true
            state.view = view
            state.limit = view === ArticleView.ROW ? 4 : 9
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state, action) => {
                state.error = undefined
                state.isLoading = true

                if (action.meta?.arg?.replace) {
                    articlesAdapter.removeAll(state)
                }
            })
            .addCase(fetchArticlesList.fulfilled, (state, action) => {
                state.isLoading = false
                state.hasMore = action.payload.length >= state.limit

                action.meta.arg.replace
                    ? articlesAdapter.setAll(state, action.payload)
                    : articlesAdapter.addMany(state, action.payload)
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions: articlesPageActions, reducer: articlesPageReducer } =
    articlePageSlice
