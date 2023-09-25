import { type StateSchema } from '1_app/providers/StoreProvider'
import { ArticleView } from '5_entities/Article'

export const getArticlesPageIsLoading = (state: StateSchema): boolean | undefined =>
    state.articlesPage?.isLoading

export const getArticlesPageIsError = (state: StateSchema): string | undefined => state.articlesPage?.error

export const getArticlesPageView = (state: StateSchema): ArticleView =>
    state.articlesPage?.view || ArticleView.TILE

export const getArticlesPageNum = (state: StateSchema): number => state.articlesPage?.page || 1

export const getArticlesPageHasMore = (state: StateSchema): boolean | undefined => state.articlesPage?.hasMore

export const getArticlesPageLimit = (state: StateSchema): number | undefined => state.articlesPage?.limit
