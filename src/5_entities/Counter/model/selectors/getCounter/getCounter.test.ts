import { type StateSchema } from '1_app/providers/StoreProvider'
import { type DeepPartial } from '@reduxjs/toolkit'
import { getCounter } from './getCounter'

describe('getCounter', () => {
    test('shoul return counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        }
        expect(getCounter(state as StateSchema)).toEqual({value: 10})
    })
})
