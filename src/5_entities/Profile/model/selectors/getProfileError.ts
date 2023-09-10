import { type StateSchema } from '1_app/providers/StoreProvider'

export const getProfileError = (state: StateSchema): string => {
   return state?.profile?.error || ''
}
