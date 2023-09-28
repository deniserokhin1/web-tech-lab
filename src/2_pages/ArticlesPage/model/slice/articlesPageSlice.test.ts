import { fetchArticlesList } from '../services/fetchArticlesList'
import { articlesPageActions, articlesPageReducer } from './articlesPageSlice'
import { type ArticlesPageSchema } from '../types/articlesPageSchema'
import { articles } from '2_pages/ArticlesPage/mock/data'

describe('articlesPageSlice', () => {
    const { setPage } = articlesPageActions
    test('set page in state', () => {
        const state: DeepPartial<ArticlesPageSchema> = {}

        expect(articlesPageReducer(state as ArticlesPageSchema, setPage(10))).toEqual({
            page: 10,
        })
    })
    test('test fetching articles service pending', () => {
        const state: DeepPartial<ArticlesPageSchema> = {
            isLoading: false,
        }

        expect(articlesPageReducer(state as ArticlesPageSchema, fetchArticlesList.pending)).toEqual({
            isLoading: true,
        })
    })

    test('test fetching articles service fullfiled', () => {
        const state: DeepPartial<ArticlesPageSchema> = {
            isLoading: true,
            entities: {},
            ids: [],
        }

        expect(
            articlesPageReducer(
                state as ArticlesPageSchema,
                fetchArticlesList.fulfilled(articles, '', {}),
            ),
        ).toEqual({
            isLoading: false,
            ids: ['1'],
            hasMore: false,
            entities: {
                1: articles[0],
            },
        })
    })
})
