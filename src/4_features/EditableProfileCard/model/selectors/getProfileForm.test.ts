import { type StateSchema } from '@/1_app/providers/StoreProvider'
import { Country } from '@/5_entities/Country'
import { Currency } from '@/5_entities/Currency'

import { getProfileForm } from './getProfileForm'

describe('getProfileForm', () => {
    test('should work with filled state', () => {
        const form = {
            first: 'Денис',
            lastname: 'Ерохин',
            age: 32,
            currency: Currency.USD,
            country: Country.US,
            city: 'Орел',
            username: 'user',
        }

        const state: DeepPartial<StateSchema> = {
            profile: {
                form,
            },
        }

        expect(getProfileForm(state as StateSchema)).toEqual(form)
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileForm(state as StateSchema)).toEqual(undefined)
    })
})
