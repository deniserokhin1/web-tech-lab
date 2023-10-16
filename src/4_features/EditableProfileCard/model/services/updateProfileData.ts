import {
    type StateSchema,
    type ThunkConfig,
} from '@/1_app/providers/StoreProvider/config/StateSchema'
import { type IProfile } from '@/5_entities/Profile'
import { USER_LOCALSTORAGE_KEY } from '@/6_shared/const/localStorage'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { getProfileForm } from '../selectors/getProfileForm'
import { validateProfileData } from './validateProfileData'
// import { profileActions } from '../slices/EditableProfileCardSlice'
import { ValidateProfileErrors } from '../const/validateErrors'

export const updateProfileData = createAsyncThunk<
    IProfile,
    void,
    ThunkConfig<ValidateProfileErrors[]>
>('profile/updateProfileData', async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi

    const formData = getProfileForm(getState() as StateSchema)

    const errors = validateProfileData(formData)

    if (errors.length) {
        return rejectWithValue(errors)
    }

    try {
        const response = await extra.api.put<IProfile>(
            `/profile/${formData?.id}`,
            formData,
            {
                headers: {
                    authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
                },
            },
        )

        if (!response.data) {
            throw new Error()
        }

        return response.data
    } catch (error) {
        console.log(error)
        return rejectWithValue([ValidateProfileErrors.SERVER_ERROR])
    }
})
