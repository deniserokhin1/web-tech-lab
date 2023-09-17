import { type StateSchema } from '1_app/providers/StoreProvider'
import { getAddCommentError, getAddCommentText } from './getAddCommentForm'

describe('getAddCommentForm', () => {
    test('get text', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                text: 'New comment',
            },
        }
        expect(getAddCommentText(state as StateSchema)).toEqual('New comment')
    })

    test('get value with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getAddCommentText(state as StateSchema)).toEqual(undefined)
    })

    test('get error', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                error: 'Error'
            }
        }
        expect(getAddCommentError(state as StateSchema)).toEqual('Error')
    })
})
