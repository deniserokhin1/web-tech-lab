import { createAsyncThunk } from '@reduxjs/toolkit'
import {
    type StateSchema,
    type ThunkConfig,
} from '1_app/providers/StoreProvider/config/StateSchema'
import { ValidateProfileErrors, type IProfile } from '../types/profile'
import { getProfileForm } from '../selectors/getProfileForm'
import { profileActions } from '../slice/profileSlice'
import { USER_LOCALSTORAGE_KEY } from '6_shared/const/localStorage'
import { validateProfileData } from './validateProfileData'

export const updateProfileData = createAsyncThunk<
    IProfile,
    void,
    ThunkConfig<ValidateProfileErrors[]>
>('profile/updateProfileData', async (_, thunkApi) => {
    const { extra, rejectWithValue, getState, dispatch } = thunkApi

    const formData = getProfileForm(getState() as StateSchema)

    const errors = validateProfileData(formData)

    if (errors.length) {
        return rejectWithValue(errors)
    }

    try {
        dispatch(profileActions.saveEdit())

        const response = await extra.api.put<IProfile>('/profile', formData, {
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
        return rejectWithValue([ValidateProfileErrors.SERVER_ERROR])
    }
})
