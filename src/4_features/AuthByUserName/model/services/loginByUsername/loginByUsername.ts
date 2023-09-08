import { userActions, type IUser } from '5_entities/User'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { USER_LOCALSTORAGE_KEY } from '6_shared/const/localStorage'
import { type ThunkConfig } from '1_app/providers/StoreProvider/config/StateSchema'

interface LoginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<
    IUser,
    LoginByUsernameProps,
    ThunkConfig<string>
>('login/loginByUsername', async (authData, thunkApi) => {
    const { dispatch, extra, rejectWithValue } = thunkApi
    try {
        const response = await extra.api.post<IUser>('/login', authData)
        if (!response.data) throw new Error()

        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
        dispatch(userActions.setAuthData(response.data))

        if (extra.navigate) extra.navigate('/profile')

        return response.data
    } catch (error) {
        console.log(error)
        return rejectWithValue('Error')
    }
})
