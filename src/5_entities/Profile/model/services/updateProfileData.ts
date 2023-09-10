import { createAsyncThunk } from '@reduxjs/toolkit'
import {
    type StateSchema,
    type ThunkConfig,
} from '1_app/providers/StoreProvider/config/StateSchema'
import { type IProfile } from '../types/profile'
import { getProfileForm } from '../selectors/getProfileForm'
import { profileActions } from '../slice/profileSlice'
import { USER_LOCALSTORAGE_KEY } from '6_shared/const/localStorage'

export const updateProfileData = createAsyncThunk<IProfile, void, ThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState, dispatch } = thunkApi

        const formData = getProfileForm(getState() as StateSchema)

        try {
            dispatch(profileActions.saveEdit())
            const response = await extra.api.put<IProfile>('/profile', formData, {
                headers: {
                    authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
                },
            })
            return response.data
        } catch (error) {
            console.log(error)
            return rejectWithValue('Error while setting profile data.')
        }
    },
)
