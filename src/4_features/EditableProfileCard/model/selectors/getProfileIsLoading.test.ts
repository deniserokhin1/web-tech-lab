import { type StateSchema } from '@/1_app/providers/StoreProvider'

import { getProfileIsLoading } from './getProfileIsLoading'

describe('getProfileIsLoading', () => {
    test('should work with isLoading', () => {
        const isLoading = true

        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading
            },
        }

        expect(getProfileIsLoading(state as StateSchema)).toEqual(true)
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileIsLoading(state as StateSchema)).toEqual(false)
    })
})
