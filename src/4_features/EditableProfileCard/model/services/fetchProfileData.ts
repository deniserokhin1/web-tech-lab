import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/1_app/providers/StoreProvider/config/StateSchema'
import { USER_LOCALSTORAGE_KEY } from '@/6_shared/const/localStorage'
import { type IProfile } from '@/5_entities/Profile'

export const fetchProfileData = createAsyncThunk<IProfile, string, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (profileId, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi

        try {
            const response = await extra.api.get<IProfile>(`/profile/${profileId}`, {
                headers: {
                    authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
                },
            })

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (error) {
            console.log(error)
            return rejectWithValue('error')
        }
    },
)
