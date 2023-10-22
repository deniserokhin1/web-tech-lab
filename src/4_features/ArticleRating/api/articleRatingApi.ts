import { IRating } from '@/5_entities/Rating'
import { rtkAPI } from '@/6_shared/api/rtkApi'

interface GetArticleRatingArg {
    userId: string
    articleId: string
}

interface RateArticleArg {
    userId: string
    articleId: string
    rate: number
    feedback?: string
}

const articleRatingApi = rtkAPI.injectEndpoints({
    endpoints: (build) => ({
        getArticleRating: build.query<
            IRating[],
            GetArticleRatingArg
        >({
            query: ({ userId, articleId }) => ({
                url: '/article-ratings',
                params: {
                    userId,
                    articleId,
                },
            }),
        }),
        rateArticle: build.mutation<
            void,
            RateArticleArg
        >({
            query: (body) => ({
                url: '/article-ratings',
                method: 'POST',
                body,

            }),
        }),
    }),
})

export const useArticleRating = articleRatingApi.useGetArticleRatingQuery
export const useRateArticle = articleRatingApi.useRateArticleMutation
