import { TestAsyncThunk } from '6_shared/lib/tests/TestAsyncThunk'
import { fetchNextArticlesPage } from './fecthNextArticlePage'
import { fetchArticlesList } from './fetchArticlesList'
import { initArticlesPage } from './initArticlesPage'

jest.mock('./fetchArticlesList')

describe('initArticlesPage', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                _inited: false,
            },
        })
        await thunk.callThunk()

        expect(thunk.dispatch).toBeCalledTimes(4)
        expect(fetchArticlesList).toBeCalledWith({ page: 1 })
    })
    test('initArticlesPage not calles', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                _inited: true,
            },
        })
        await thunk.callThunk()

        expect(thunk.dispatch).toBeCalledTimes(2)
        expect(fetchArticlesList).not.toHaveBeenCalled()
    })
})
