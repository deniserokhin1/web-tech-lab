import { type StateSchema } from '1_app/providers/StoreProvider'

export const getAddCommentText = (state: StateSchema): string | undefined =>
    state.addCommentForm?.text

export const getAddCommentError = (state: StateSchema): string | undefined =>
    state.addCommentForm?.error
