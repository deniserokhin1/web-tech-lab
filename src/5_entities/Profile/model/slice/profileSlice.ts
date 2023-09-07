import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { USER_LOCALSTORAGE_KEY } from '6_shared/const/localStorage'
import { type IProfile, type ProfileSchema } from '../types/profile'

const initialState: ProfileSchema = {
    isLoading: false,
    readonly: true,
    error: null,
    data: null,
}

export const profileSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
})

export const { actions: profileActions, reducer: profileReducer } = profileSlice
