import { type StateSchema } from '1_app/providers/StoreProvider'

export const getLoginIsLoading = (state: StateSchema): boolean => state?.login?.isLoading
