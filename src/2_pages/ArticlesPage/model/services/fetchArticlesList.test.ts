import { TestAsyncThunk } from '6_shared/lib/tests/TestAsyncThunk'
import { fetchArticlesList } from './fetchArticlesList'
import axios from 'axios'
import { articles } from '../../mock/data'

jest.mock('axios')
const mockedAxios = jest.mocked(axios)

describe('initArticlesPage success', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchArticlesList, {
            articlesPage: {
                limit: 5,
            },
        })

        thunk.api.get.mockReturnValue(Promise.resolve({ data: articles }))
        const result = await thunk.callThunk({ page: 1 })

        expect(mockedAxios.get).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(articles)
        expect(thunk.dispatch).toBeCalledTimes(2)
    })
    test('initArticlesPage error', async () => {
        const thunk = new TestAsyncThunk(fetchArticlesList, {
            articlesPage: {
                limit: 5,
            },
        })

        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk({ page: 1 })

        expect(mockedAxios.get).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe('Error while fetching articles.')
        expect(thunk.dispatch).toBeCalledTimes(2)
    })
})
