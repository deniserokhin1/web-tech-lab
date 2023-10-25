import { type StateSchema } from '@/1_app/providers/StoreProvider'

import { type LoginSchema } from '../types/loginSchema'

export const getLoginState = (state: StateSchema): LoginSchema | undefined => state?.login
