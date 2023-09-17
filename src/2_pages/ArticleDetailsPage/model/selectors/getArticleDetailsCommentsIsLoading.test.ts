import { type StateSchema } from '1_app/providers/StoreProvider'
import { getArticleDetailsCommentsIsLoading } from './getArticleDetailsCommentsIsLoading'

describe('getArticleDetailsComments', () => {
    const state: DeepPartial<StateSchema> = {
        articleDetailsComments: {
            isLoading: true,
        },
    }
    test('getArticleDetailsCommentsIsLoading', () => {
        expect(getArticleDetailsCommentsIsLoading(state as StateSchema)).toEqual(true)
    })
})
