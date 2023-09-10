import { type StateSchema } from '1_app/providers/StoreProvider'
import { type IProfile } from '../types/profile'

export const getProfileForm = (state: StateSchema): IProfile | undefined => {
    return state?.profile?.form
}
