import { type DeepPartial } from '@reduxjs/toolkit'
import { type LoginSchema } from '../types/loginSchema'
import { loginActions, loginReducer } from './loginSlice'

describe('loginSlice.test', () => {
    const {setPassword, setUsername} = loginActions
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '' }
        expect(
            loginReducer(state as LoginSchema, setUsername('user')),
        ).toEqual({ username: 'user' })
    })

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '' }
        expect(
            loginReducer(state as LoginSchema, setPassword('123')),
        ).toEqual({ password: '123' })
    })
})
