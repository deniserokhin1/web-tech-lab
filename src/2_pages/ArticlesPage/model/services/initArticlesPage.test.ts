import { TestAsyncThunk } from '@/6_shared/lib/tests/TestAsyncThunk'

import { fetchArticlesList } from './fetchArticlesList'
import { initArticlesPage } from './initArticlesPage'

jest.mock('./fetchArticlesList')

describe('initArticlesPage', () => {
    const searchParams = new URLSearchParams(window.location.search)
    test('success', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                _inited: false,
            },
        })
        await thunk.callThunk(searchParams)

        expect(thunk.dispatch).toBeCalledTimes(4)
        expect(fetchArticlesList).toBeCalledWith({})
    })
    test('initArticlesPage not calles', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                _inited: true,
            },
        })
        await thunk.callThunk(searchParams)

        expect(thunk.dispatch).toBeCalledTimes(2)
        expect(fetchArticlesList).not.toHaveBeenCalled()
    })
})
