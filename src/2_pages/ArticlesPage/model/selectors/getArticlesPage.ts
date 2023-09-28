import { type StateSchema } from '1_app/providers/StoreProvider'
import { ArticleSortFeild, ArticleView } from '5_entities/Article'
import { ArticleType } from '5_entities/Article/model/types/article'
import { type SortOrder } from '6_shared/types'

export const getArticlesPageIsLoading = (state: StateSchema): boolean | undefined =>
    state.articlesPage?.isLoading

export const getArticlesPageIsError = (state: StateSchema): string | undefined => state.articlesPage?.error

export const getArticlesPageView = (state: StateSchema): ArticleView =>
    state.articlesPage?.view || ArticleView.TILE

export const getArticlesPageNum = (state: StateSchema): number => state.articlesPage?.page || 1

export const getArticlesPageHasMore = (state: StateSchema): boolean | undefined => state.articlesPage?.hasMore

export const getArticlesPageLimit = (state: StateSchema): number | undefined => state.articlesPage?.limit

export const getArticlesPageInited = (state: StateSchema): boolean | undefined => state.articlesPage?._inited

export const getArticlesPageSort = (state: StateSchema): SortOrder => state.articlesPage?.sort ?? 'asc'

export const getArticlesPageFilter = (state: StateSchema): ArticleSortFeild =>
    state.articlesPage?.filter ?? ArticleSortFeild.CREATED
export const getArticlesPageSearch = (state: StateSchema): string => state.articlesPage?.search ?? ''

export const getArticlesPageType = (state: StateSchema): ArticleType => state.articlesPage?.type ?? ArticleType.ALL
