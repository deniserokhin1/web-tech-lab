import { type StateSchema } from '1_app/providers/StoreProvider'
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { type ArticleDetailsRecommendationsSchema } from '../types/articleDetailsRecommendationsSchema'
import { type IArticle } from '5_entities/Article'
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations'

const recommendationsAdapter = createEntityAdapter<IArticle>({
    selectId: (article) => article.id,
})

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDeatailsPage?.recommendations || recommendationsAdapter.getInitialState(),
)

const articleDetailsRecomendationsSlice = createSlice({
    name: 'articleDetailsRecomendationsSlice',
    initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>({
        isLoading: false,
        entities: {},
        ids: [],
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
                recommendationsAdapter.setAll(state, action.payload)
                state.isLoading = false
            })
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
            })
    },
})

export const { actions, reducer: articleDetailsRecomendationsReducer } = articleDetailsRecomendationsSlice
