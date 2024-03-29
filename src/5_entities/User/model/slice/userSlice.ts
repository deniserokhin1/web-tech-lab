import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

import { USER_LOCALSTORAGE_KEY } from '@/6_shared/const/localStorage'

import { type IUser, type UserSchema } from '../types/user'

const initialState: UserSchema = {}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<IUser>) => {
            state.authData = action.payload
        },
        setUserAvatar: (state, action: PayloadAction<string>) => {
            if (state.authData?.avatar) {
                state.authData.avatar = action.payload
            }
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)
            if (user) {
                state.authData = JSON.parse(user)
            }
            state._inited = true
        },
        logout: (state) => {
            state.authData = undefined
            localStorage.removeItem(USER_LOCALSTORAGE_KEY)
        },
    },
})

export const { actions: userActions, reducer: userReducer } = userSlice
