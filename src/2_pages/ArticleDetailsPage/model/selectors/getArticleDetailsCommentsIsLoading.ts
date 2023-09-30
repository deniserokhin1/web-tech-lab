import { type StateSchema } from '1_app/providers/StoreProvider'

export const getArticleDetailsCommentsIsLoading = (state: StateSchema): boolean =>
    state.articleDeatailsPage?.comments?.isLoading ?? false
