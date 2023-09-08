import { type StateSchema } from '1_app/providers/StoreProvider'

export const getLoginUsername = (state: StateSchema): string | undefined => state?.login?.username
