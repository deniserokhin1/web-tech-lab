import { type StateSchema } from '1_app/providers/StoreProvider'
import { type ValidateProfileErrors } from '../types/EditableProfileCardSchema'

export const getProfileValidateErrors = (
    state: StateSchema,
): ValidateProfileErrors[] | undefined => {
    return state?.profile?.validateErrors || undefined
}
