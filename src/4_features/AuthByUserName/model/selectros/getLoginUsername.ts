import { type StateSchema } from '1_app/providers/StoreProvider'

export const getLoginUsername = (state: StateSchema): string => state?.login?.username
