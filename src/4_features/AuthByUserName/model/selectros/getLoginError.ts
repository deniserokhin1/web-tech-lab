import { type StateSchema } from '@/1_app/providers/StoreProvider'

export const getLoginError = (state: StateSchema): string | undefined => state?.login?.error
