export { ArticleDetailsPageAsync as ArticleDetailsPage } from './ui/ArticleDetailsPage/ArticleDetailsPageAsync'
export type { ArticleDetailsCommentsSchema } from './model/types/articleDetailsCommentsSchema'
export type { ArticleDetailsRecommendationsSchema } from './model/types/articleDetailsRecommendationsSchema'
export type { ArticleDetailsPageSchema } from './model/types'
export {
    articleDetailsCommentsReducer,
    getArticleComments,
    actions,
} from './model/slice/articleDetailsCommentsSlice'
export { articleDetailsPageReducer } from './model/slice'
