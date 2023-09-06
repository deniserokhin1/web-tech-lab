import { type StateSchema } from '1_app/providers/StoreProvider'
import { type DeepPartial } from '@reduxjs/toolkit'
import { getLoginError } from './getLoginError'
import { getLoginIsLoading } from './getLoginIsLoading'
import { getLoginPassword } from './getLoginPassword'
import { getLoginUsername } from './getLoginUsername'

describe('getLogin', () => {
    test('getLoginError', () => {
        const state: DeepPartial<StateSchema> = {
            login: { error: 'Error' },
        }
        expect(getLoginError(state as StateSchema)).toEqual('Error')
    })
    test('getLoginLoading', () => {
        const state: DeepPartial<StateSchema> = {
            login: { isLoading: true },
        }
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true)
    })
    test('getLoginPassword', () => {
        const state: DeepPartial<StateSchema> = {
            login: { password: '123' },
        }
        expect(getLoginPassword(state as StateSchema)).toEqual('123')
    })
    test('getLoginUsername', () => {
        const state: DeepPartial<StateSchema> = {
            login: { username: 'user' },
        }
        expect(getLoginUsername(state as StateSchema)).toEqual('user')
    })
    test('getLoginUsername with empty test', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginUsername(state as StateSchema)).toEqual(undefined)
    })
})
