import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type UISchema } from '../types/UISchema'

const initialState: UISchema = {
    scroll: {},
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setScrollPosition: (state, { payload }: PayloadAction<{ path: string; position: number }>) => {
            state.scroll[payload.path] = payload.position
        },
        setBgColor: (state, action: PayloadAction<string>) => {
            state.bgColor = action.payload
        },
        setPrimaryColor: (state, action: PayloadAction<string>) => {
            state.primaryColor = action.payload
        },
        setSecondaryColor: (state, action: PayloadAction<string>) => {
            state.secondaryColor = action.payload
        },
        setScrolling: (state, action: PayloadAction<boolean>) => {
            state.isScrolling = action.payload
        },
    },
})

export const { actions: uiActions } = uiSlice
export const { reducer: uiReducer } = uiSlice
