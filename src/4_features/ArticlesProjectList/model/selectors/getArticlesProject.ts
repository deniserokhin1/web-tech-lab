import { StateSchema } from '@/1_app/providers/StoreProvider'
import { IArticleProject } from '@/5_entities/Article'

export const getArticleProjectListData = (state: StateSchema): IArticleProject[] =>
    state.articlesProjectList?.data || []
export const getArticleProjectListIsLoading = (state: StateSchema): boolean =>
    state.articlesProjectList?.isLoading || false
export const getArticleProjectListError = (state: StateSchema): string | undefined =>
    state.articlesProjectList?.error
