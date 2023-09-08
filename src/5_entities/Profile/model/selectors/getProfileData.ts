import { type StateSchema } from '1_app/providers/StoreProvider'
import { type IProfile } from '../types/profile'

export const getProfileData = (state: StateSchema): IProfile | null =>
    state?.profile?.data || null
