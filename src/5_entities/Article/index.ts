export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails'
export type { IArticle } from './model/types/article'
export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema'
export {
    articleDetailsActions,
    articleDetailsReducer,
} from './model/slice/articleDetailsSlice'

export {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from './model/selectors/getArticleDetails'
