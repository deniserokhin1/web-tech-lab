import { type StateSchema } from '1_app/providers/StoreProvider'

export const getArticleDetailsCommentsIsLoading = (state: StateSchema): boolean | undefined =>
    state.articleDetailsComments?.isLoading
