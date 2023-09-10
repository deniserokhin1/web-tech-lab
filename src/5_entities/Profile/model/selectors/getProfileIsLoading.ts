import { type StateSchema } from '1_app/providers/StoreProvider'

export const getProfileIsLoading = (state: StateSchema): boolean => {
    return state?.profile?.isLoading || false
}
