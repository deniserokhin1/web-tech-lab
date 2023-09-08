import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type IProfile, type ProfileSchema } from '../types/profile'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'

const initialState: ProfileSchema = {
    isLoading: false,
    readonly: true,
    error: null,
    data: null,
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state, action) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(
                fetchProfileData.fulfilled,
                (state, action: PayloadAction<IProfile>) => {
                    state.isLoading = false
                    state.data = action.payload
                },
            )
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions: profileActions, reducer: profileReducer } = profileSlice
