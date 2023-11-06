import { createAsyncThunk } from '@reduxjs/toolkit'

import {
    type StateSchema,
    type ThunkConfig,
} from '@/1_app/providers/StoreProvider/config/StateSchema'
import { IUser, userActions } from '@/5_entities/User'
import { USER_LOCALSTORAGE_KEY } from '@/6_shared/const/localStorage'

import { ValidateProfileErrors } from '../const/validateErrors'
import { getProfileForm } from '../selectors/getProfileForm'

import { validateProfileData } from './validateProfileData'

export const updateUserData = createAsyncThunk<IUser, void, ThunkConfig<ValidateProfileErrors[]>>(
    'profile/updateUserData',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState, dispatch } = thunkApi

        const formData = getProfileForm(getState() as StateSchema)

        const errors = validateProfileData(formData)

        if (errors.length) {
            return rejectWithValue(errors)
        }

        try {
            const response = await extra.api.patch<IUser>(`/users/${formData?.id}`, {
                avatar: formData?.avatar,
            })

            if (!response.data) {
                throw new Error()
            }

            if (response.data.avatar) {
                dispatch(userActions.setUserAvatar(response.data.avatar))
                localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            }

            return response.data
        } catch (error) {
            console.log(error)
            return rejectWithValue([ValidateProfileErrors.SERVER_ERROR])
        }
    },
)
