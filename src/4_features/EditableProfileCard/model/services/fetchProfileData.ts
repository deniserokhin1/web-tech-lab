import { createAsyncThunk } from '@reduxjs/toolkit'

import { type ThunkConfig } from '@/1_app/providers/StoreProvider/config/StateSchema'
import { type IProfile } from '@/5_entities/Profile'

export const fetchProfileData = createAsyncThunk<IProfile, string, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (profileId, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi

        try {
            const response = await extra.api.get<IProfile>(`/profile/${profileId}`)

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error)
            return rejectWithValue('error')
        }
    },
)
