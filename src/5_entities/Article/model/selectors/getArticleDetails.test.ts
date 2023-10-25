import { type StateSchema } from '@/1_app/providers/StoreProvider'

import { getArticleDetailsData, getArticleDetailsIsLoading } from './getArticleDetails'

describe('getArticleDetails', () => {
    test('should work with filled state', () => {
        const data = {
            title: 'Title',
            subtitle: 'Subtitle',
        }

        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data,
            },
        }

        expect(getArticleDetailsData(state as StateSchema)).toEqual(data)
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined)
    })

    test('should return isLoading with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(undefined)
    })

    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        }
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true)
    })
})
