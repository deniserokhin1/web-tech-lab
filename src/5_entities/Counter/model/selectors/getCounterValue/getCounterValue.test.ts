import { type DeepPartial } from '@reduxjs/toolkit'
import { getCounterValue } from './getCounterValue'
import { type StateSchema } from '1_app/providers/StoreProvider'

describe('getCounterValue', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: {
                value: 10,
            },
        }
        expect(getCounterValue(state as StateSchema)).toEqual(10)
    })
})
