import { type StateSchema, StoreProvider } from '1_app/providers/StoreProvider'
import { loginReducer } from '4_features/AuthByUserName/model/slice/loginSlice'
import { type ReducersMapObject, type DeepPartial } from '@reduxjs/toolkit'
import { type Decorator } from '@storybook/react'

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    login: loginReducer,
}

export const StoreDecorator =
    (
        state: DeepPartial<StateSchema>,
        asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
    ): Decorator =>
    (StoryComponent) => (
        <StoreProvider
            initialState={state as StateSchema}
            asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
        >
            <StoryComponent />
        </StoreProvider>
    )
