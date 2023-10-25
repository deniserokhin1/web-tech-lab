import { type DeepPartial } from '@reduxjs/toolkit'

import { type AddCommentFormSchema } from '../types/addCommentForm'

import { addNewCommentActions, addNewCommentReducer } from './addCommentFormSlice'

describe('addCommentFormSlice', () => {
    const { setText } = addNewCommentActions
    test('set comment text', () => {
        const state: DeepPartial<AddCommentFormSchema> = { text: '' }

        expect(
            addNewCommentReducer(state as AddCommentFormSchema, setText('Comment')),
        ).toEqual({
            text: 'Comment',
        })
    })

    test('delete comment text', () => {
        const state: DeepPartial<AddCommentFormSchema> = { text: 'Comment' }

        expect(addNewCommentReducer(state as AddCommentFormSchema, setText(''))).toEqual({
            text: '',
        })
    })
})
