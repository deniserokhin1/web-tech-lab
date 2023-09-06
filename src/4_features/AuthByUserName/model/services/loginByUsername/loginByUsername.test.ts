import axios from 'axios'
import { loginByUsername } from './loginByUsername'
import { userActions } from '5_entities/User'
import { TestAsyncThunk } from '6_shared/lib/tests/TestAsyncThunk'
// import { type StateSchema } from '1_app/providers/StoreProvider'
// import { type Dispatch } from '@reduxjs/toolkit'

jest.mock('axios')
const mockedAxios = jest.mocked(axios)

describe('loginByUsername.test', () => {
    test('success login', async () => {
        const userValue = { username: 'admin', id: '1' }
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))

        const thunk = new TestAsyncThunk(loginByUsername)
        const result = await thunk.callThunk({ password: '123', username: 'admin' })

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
        expect(thunk.dispatch).toHaveBeenCalledTimes(3)
        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toBe(userValue)
    })
    test('error login', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))

        const thunk = new TestAsyncThunk(loginByUsername)
        const result = await thunk.callThunk({ password: '123', username: 'admin' })

        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe('Error')
    })
})

// describe('loginByUsername.test', () => {
//     let dispatch: Dispatch
//     let getState: () => StateSchema

//     beforeEach(() => {
//         dispatch = jest.fn()
//         getState = jest.fn()
//     })
//     test('success login', async () => {
//         const userValue = { username: 'admin', id: '1' }
//         mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))

//         const action = loginByUsername({ password: '123', username: 'admin' })
//         const result = await action(dispatch, getState, undefined)

//         expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
//         expect(dispatch).toHaveBeenCalledTimes(3)
//         expect(mockedAxios.post).toHaveBeenCalled()
//         expect(result.meta.requestStatus).toBe('fulfilled')
//         expect(result.payload).toBe(userValue)
//     })
//     test('error login', async () => {
//         mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))

//         const action = loginByUsername({ password: '123', username: 'admin' })
//         const result = await action(dispatch, getState, undefined)

//         expect(dispatch).toHaveBeenCalledTimes(2)
//         expect(mockedAxios.post).toHaveBeenCalled()
//         expect(result.meta.requestStatus).toBe('rejected')
//     })
// })
