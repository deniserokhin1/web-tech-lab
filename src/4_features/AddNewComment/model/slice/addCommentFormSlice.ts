import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

import { type AddCommentFormSchema } from '../types/addCommentForm'

const initialState: AddCommentFormSchema = {
    isLoading: false,
}

export const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload
        },
    },
})

export const { actions: addNewCommentActions } = addCommentFormSlice
export const { reducer: addNewCommentReducer } = addCommentFormSlice
