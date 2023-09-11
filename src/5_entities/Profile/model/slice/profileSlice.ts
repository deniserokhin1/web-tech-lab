import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type IProfile, type ProfileSchema } from '../types/profile'
import { fetchProfileData } from '../services/fetchProfileData'
import { updateProfileData } from '../services/updateProfileData'

const initialState: ProfileSchema = {
    isLoading: false,
    readonly: true,
    error: undefined,
    data: undefined,
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadOnly: (state: ProfileSchema, action: PayloadAction<boolean>) => {
            state.readonly = action.payload
        },
        cancelEdit: (state: ProfileSchema) => {
            state.form = state.data
            state.readonly = true
            state.validateErrors = undefined
        },
        saveEdit: (state: ProfileSchema) => {
            state.data = state.form
            state.readonly = true
        },
        updateProfile: (state: ProfileSchema, action: PayloadAction<IProfile>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            }
        },
    },
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
                    state.form = action.payload
                },
            )
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })

            .addCase(updateProfileData.pending, (state, action) => {
                state.error = undefined
                state.isLoading = true
                state.validateErrors = undefined
            })
            .addCase(
                updateProfileData.fulfilled,
                (state, action: PayloadAction<IProfile>) => {
                    state.isLoading = false
                    state.data = action.payload
                    state.form = action.payload
                },
            )
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.validateErrors = action.payload
            })
    },
})

export const { actions: profileActions, reducer: profileReducer } = profileSlice
