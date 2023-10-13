import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { AvatarDropDownSchema } from '../types/avatarDropDownSchema'

const initialState: AvatarDropDownSchema = {}

export const avatarDropDownSlice = createSlice({
    name: 'avatarDropDown',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
           
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: avatarDropDownActions } = avatarDropDownSlice;
export const { reducer: avatarDropDownReducer } = avatarDropDownSlice;