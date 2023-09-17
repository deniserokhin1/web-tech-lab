import { TestAsyncThunk } from '6_shared/lib/tests/TestAsyncThunk'
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId'
import axios from 'axios'
import { type IComment } from '5_entities/Comment'

jest.mock('axios')
const mockedAxios = jest.mocked(axios)

const data: IComment[] = [
    {
        id: '1',
        text: 'Comment 1',
        user: {
            id: '1',
            username: 'Den',
            avatar: 'https://img.freepik.com/free-vector/creative-hacker-logo-template_23-2149199402.jpg?w=2000',
        },
    },
    {
        id: '2',
        text: 'Comment 2',
        user: {
            id: '1',
            username: 'Leon',
            avatar: 'https://www.ourmigrationstory.org.uk/uploads/_CGSmartImage/img-a2beae8392617b8c02b85d8b9197fb96',
        },
    },
]

describe('fetchCommentsByArticleId', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId)
        thunk.api.get.mockReturnValue(Promise.resolve({ data }))
        const result = await thunk.callThunk('1')

        expect(mockedAxios.get).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)
    })
    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId)
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk('1')

        expect(mockedAxios.get).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe('Error while fetching comments by article id.')
    })
})
