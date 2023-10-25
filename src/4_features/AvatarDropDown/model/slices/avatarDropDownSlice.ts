import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState = {}

export const avatarDropDownSlice = createSlice({
    name: 'avatarDropDown',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
           
        },
    },
});

export const { actions: avatarDropDownActions } = avatarDropDownSlice;
export const { reducer: avatarDropDownReducer } = avatarDropDownSlice;