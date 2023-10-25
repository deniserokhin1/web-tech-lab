import { type StateSchema } from '@/1_app/providers/StoreProvider'

import { getProfileError } from './getProfileError'

describe('getProfileError', () => {
    test('should work with error', () => {
        const error = 'Некорректные данные'

        const state: DeepPartial<StateSchema> = {
            profile: {
                error,
            },
        }

        expect(getProfileError(state as StateSchema)).toEqual(error)
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileError(state as StateSchema)).toEqual(undefined)
    })
})
