import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { EditableProfileCardSchema } from '../types/EditableProfileCardSchema'
import { type IProfile } from '5_entities/Profile'
import { fetchProfileData } from '../services/fetchProfileData'
import { updateProfileData } from '../services/updateProfileData'

const initialState: EditableProfileCardSchema = {
    isLoading: false,
    readonly: true,
    error: undefined,
    data: undefined,
}

export const editableProfileCardSlice = createSlice({
    name: 'EditableProfileCard',
    initialState,
    reducers: {
        setReadOnly: (
            state: EditableProfileCardSchema,
            action: PayloadAction<boolean>,
        ) => {
            state.readonly = action.payload
        },
        cancelEdit: (state: EditableProfileCardSchema) => {
            state.form = state.data
            state.readonly = true
            state.validateErrors = undefined
        },
        saveEdit: (state: EditableProfileCardSchema) => {
            state.data = state.form
            state.readonly = true
        },
        updateProfile: (
            state: EditableProfileCardSchema,
            action: PayloadAction<IProfile>,
        ) => {
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

export const { actions: profileActions, reducer: profileReducer } =
    editableProfileCardSlice
