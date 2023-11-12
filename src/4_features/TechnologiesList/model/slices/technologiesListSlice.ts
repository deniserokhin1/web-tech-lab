import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { fetchTechnologiesList } from '../services/fetchTechnologiesList'
import type { ITechnology, TechnologiesListSchema } from '../types/technologiesListSchema'

const initialState: TechnologiesListSchema = {
    isLoading: false,
    technologies: [],
}

export const technologiesListSlice = createSlice({
    name: 'technologiesList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTechnologiesList.pending, (state) => {
                state.technologies = []
                state.isLoading = true
            })
            .addCase(fetchTechnologiesList.fulfilled, (state, action: PayloadAction<ITechnology[]>) => {
                state.isLoading = false
                state.technologies = action.payload
            })
            .addCase(fetchTechnologiesList.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions: technologiesListActions } = technologiesListSlice
export const { reducer: technologiesListReducer } = technologiesListSlice
