import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/1_app/providers/StoreProvider/config/StateSchema'

import { ITechnology } from '../types/technologiesListSchema'

export const fetchTechnologiesList = createAsyncThunk<ITechnology[], void, ThunkConfig<string>>(
    'technologiesList/fetchTechnologiesList',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi

        try {
            const response = await extra.api.get<ITechnology[]>('/technologies')

            if (!response.data) throw new Error()

            return response.data
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error)
            return rejectWithValue('Error while fetching technologies list.')
        }
    },
)
