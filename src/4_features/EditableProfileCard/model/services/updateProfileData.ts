import { createAsyncThunk } from '@reduxjs/toolkit'
import {
    type StateSchema,
    type ThunkConfig,
} from '1_app/providers/StoreProvider/config/StateSchema'
import { getProfileForm } from '../selectors/getProfileForm'
import { USER_LOCALSTORAGE_KEY } from '6_shared/const/localStorage'
import { validateProfileData } from './validateProfileData'
import { type IProfile } from '5_entities/Profile'
import { ValidateProfileErrors } from '../types/EditableProfileCardSchema'
import { profileActions } from '../slices/EditableProfileCardSlice'

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
