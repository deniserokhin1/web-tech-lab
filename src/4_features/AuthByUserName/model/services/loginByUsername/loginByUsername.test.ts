import { loginByUsername } from './loginByUsername'
import { userActions } from '@/5_entities/User'
import { TestAsyncThunk } from '@/6_shared/lib/tests/TestAsyncThunk'

describe('loginByUsername.test', () => {
    test('success login', async () => {
        const thunk = new TestAsyncThunk(loginByUsername)
        const userValue = { username: 'admin', id: '1' }
        thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }))

        const result = await thunk.callThunk({ password: '123', username: 'admin' })

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
        expect(thunk.dispatch).toHaveBeenCalledTimes(3)
        expect(thunk.api.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toBe(userValue)
    })
    test('error login', async () => {
        const thunk = new TestAsyncThunk(loginByUsername)
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))

        const result = await thunk.callThunk({ password: '123', username: 'admin' })

        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(thunk.api.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe('Error')
    })
})
