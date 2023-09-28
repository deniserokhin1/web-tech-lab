export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails'
export { type IArticle, ArticleType } from './model/types/article'
export { ArticleView, ArticleSortFeild } from './model/types/article'
export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema'
export { articleDetailsActions, articleDetailsReducer } from './model/slice/articleDetailsSlice'

export {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from './model/selectors/getArticleDetails'
export { ArticleSortSelector } from './ui/ArticleSortSelector/ArticleSortSelector'
export { ArticleTypeTabs } from './ui/ArticleTypeTabs/ArticleTypeTabs'