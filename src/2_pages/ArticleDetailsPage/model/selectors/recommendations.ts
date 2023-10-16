import { type StateSchema } from '@/1_app/providers/StoreProvider'

export const getArticleRecommendationIsLoading = (state: StateSchema): boolean =>
    state.articleDeatailsPage?.recommendations?.isLoading ?? false

export const getArticleRecommendationError = (state: StateSchema): string =>
    state.articleDeatailsPage?.recommendations?.error ?? ''
