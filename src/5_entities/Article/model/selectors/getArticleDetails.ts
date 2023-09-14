import { type StateSchema } from '1_app/providers/StoreProvider'
import { type IArticle } from '../types/article'

export const getArticleDetailsData = (state: StateSchema): IArticle | undefined =>
    state.articleDetails?.data

export const getArticleDetailsIsLoading = (state: StateSchema): boolean | undefined =>
    state.articleDetails?.isLoading

export const getArticleDetailsError = (state: StateSchema): string | undefined =>
    state.articleDetails?.error
