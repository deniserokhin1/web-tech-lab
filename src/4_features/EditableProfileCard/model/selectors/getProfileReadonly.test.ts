import { type StateSchema } from '@/1_app/providers/StoreProvider'

import { getProfileReadOnly } from './getProfileReadonly'

describe('getProfileReadonly', () => {
    test('should work with Readonly', () => {
        const readonly = true

        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly,
            },
        }

        expect(getProfileReadOnly(state as StateSchema)).toEqual(true)
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileReadOnly(state as StateSchema)).toEqual(undefined)
    })
})
