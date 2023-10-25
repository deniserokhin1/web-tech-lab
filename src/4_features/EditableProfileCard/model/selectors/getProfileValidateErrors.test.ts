import { type StateSchema } from '@/1_app/providers/StoreProvider'

import { ValidateProfileErrors } from '../const/validateErrors'

import { getProfileValidateErrors } from './getProfileValidateErrors'

describe('getProfileValidateErrors', () => {
    test('should work with ValidateErrors', () => {
        const validateErrors = [
            ValidateProfileErrors.INCORRECT_USER_DATA,
            ValidateProfileErrors.INCORRECT_AGE,
        ]

        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors,
            },
        }

        expect(getProfileValidateErrors(state as StateSchema)).toEqual(validateErrors)
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
    })
})
