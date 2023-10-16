import { type StateSchema } from '@/1_app/providers/StoreProvider'

export const getProfileReadOnly = (state: StateSchema): boolean | undefined => {
    return state.profile?.readonly
}
