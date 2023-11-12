import { type StateSchema } from '@/1_app/providers/StoreProvider'

export const getLoginError = (
    state: StateSchema,
): string | number | undefined => state?.login?.error
