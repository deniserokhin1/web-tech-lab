/* eslint-disable no-console */
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { type ThunkConfig } from '@/1_app/providers/StoreProvider/config/StateSchema'
import { userActions, type IUser } from '@/5_entities/User'
import { USER_LOCALSTORAGE_KEY } from '@/6_shared/const/localStorage'

interface LoginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<
    IUser,
    LoginByUsernameProps,
    ThunkConfig<number | string>
>('login/loginByUsername', async (authData, thunkApi) => {
    const { dispatch, extra, rejectWithValue } = thunkApi
    try {
        const response = await extra.api.post<IUser>('/login', authData)
        if (!response.data) throw new Error()

        localStorage.setItem(
            USER_LOCALSTORAGE_KEY,
            JSON.stringify(response.data),
        )
        dispatch(userActions.setAuthData(response.data))

        return response.data
    } catch (error) {
        console.log(error)
        if (axios.isAxiosError(error)) {
            if (error.response?.status) {
                return rejectWithValue(error.response?.status)
            }
            if (error.response?.statusText) {
                return rejectWithValue(error.response?.statusText)
            }
        }
        return rejectWithValue('Unknow error')
    }
})
