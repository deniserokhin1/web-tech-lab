import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '1_app/providers/StoreProvider/config/StateSchema'
import { type IProfile } from '../../types/profile'

export const fetchProfileData = createAsyncThunk<IProfile, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi
        try {
            const response = await extra.api.get<IProfile>('/profile')

            return response.data
        } catch (error) {
            console.log(error)
            return rejectWithValue('error')
        }
    },
)
