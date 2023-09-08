import { type StateSchema } from '1_app/providers/StoreProvider'

export const getLoginIsLoading = (state: StateSchema): boolean | undefined => state?.login?.isLoading
