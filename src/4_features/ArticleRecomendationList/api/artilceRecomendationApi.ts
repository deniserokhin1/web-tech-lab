import { type IArticle } from '5_entities/Article'
import { rtkAPI } from '6_shared/api/rtkApi'

const recomendationsApi = rtkAPI.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecomendationList: build.query<IArticle[], number>({
            query: (limit: number) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
})

export const useArticleRecomendationList =
    recomendationsApi.useGetArticleRecomendationListQuery
