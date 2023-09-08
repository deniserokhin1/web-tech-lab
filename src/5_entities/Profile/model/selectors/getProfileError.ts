import { type StateSchema } from '1_app/providers/StoreProvider'

export const getProfileError = (state: StateSchema): string =>
    state?.profile?.error || ''
