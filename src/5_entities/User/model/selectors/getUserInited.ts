import { type StateSchema } from '@/1_app/providers/StoreProvider'

export const getUserInited = (state: StateSchema): boolean | undefined =>
    state?.user?._inited
