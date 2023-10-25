import { type StateSchema } from '@/1_app/providers/StoreProvider'

import { type IUser } from '../types/user'

export const getUserAuthData = (state: StateSchema): IUser | undefined =>
    state?.user?.authData
