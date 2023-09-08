import { type StateSchema } from '1_app/providers/StoreProvider'

export const getProfileIsLoading = (state: StateSchema): boolean =>
    state?.profile?.isLoading || false
