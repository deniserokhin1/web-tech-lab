import { type StateSchema } from '@/1_app/providers/StoreProvider'

export const getProfileError = (state: StateSchema): string | undefined => {
   return state?.profile?.error || undefined
}
