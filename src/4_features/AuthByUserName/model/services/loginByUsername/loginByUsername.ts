import { userActions, type IUser } from '5_entities/User'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import i18n from '6_shared/config/i18n/i18n'
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
        return thunkApi.rejectWithValue(i18n.t('Неверный логин и/или пароль'))
    }
})
