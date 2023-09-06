import { userActions, type IUser } from '5_entities/User'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { USER_LOCALSTORAGE_KEY } from '6_shared/const/localStorage'

interface LoginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<
    IUser,
    LoginByUsernameProps,
    { rejectValue: string }
>('login/loginByUsername', async (authData, thunkApi) => {
    try {
        const response = await axios.post<IUser>('http://localhost:8000/login', authData)
        if (!response.data) throw new Error()

        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
        thunkApi.dispatch(userActions.setAuthData(response.data))

        return response.data
    } catch (error) {
        console.log(error)
        return thunkApi.rejectWithValue('Error')
    }
})
