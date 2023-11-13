import { IArticleProject } from '@/5_entities/Article'

export interface ArticlesProjectListSchema {
    isLoading: boolean
    error?: string
    data: IArticleProject[]
}
