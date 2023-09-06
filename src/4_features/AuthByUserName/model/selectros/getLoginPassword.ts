import { type StateSchema } from '1_app/providers/StoreProvider'

export const getLoginPassword = (state: StateSchema): string => state?.login?.password
