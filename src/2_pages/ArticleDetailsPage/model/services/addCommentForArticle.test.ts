import axios from 'axios'

import { type IArticle } from '@/5_entities/Article'
import { type IComment } from '@/5_entities/Comment'
import { TestAsyncThunk } from '@/6_shared/lib/tests/TestAsyncThunk'

import { addCommentForArticle } from './addCommentForArticle'

jest.mock('axios')
const mockedAxios = jest.mocked(axios)

const data: IComment = {
    id: '1',
    text: 'Comment 1',
    user: {
        id: '1',
        username: 'Den',
    },
}

const userData = {
    id: '1',
    username: 'Den',
}

const articleData: DeepPartial<IArticle> = {
    id: '1',
}

describe('fetchCommentsByArticleId', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, {
            user: {
                authData: userData,
            },
            articleDetails: {
                data: articleData,
            },
        })
        thunk.api.post.mockReturnValue(Promise.resolve({ data }))
        const result = await thunk.callThunk('Test comment')

        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)
    })
    test('error', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, {
            user: {
                authData: userData,
            },
            articleDetails: {
                data: articleData,
            },
        })
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk('Test comment')

        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe('Error while posting comment.')
    })
})
