import { type StateSchema, StoreProvider } from '1_app/providers/StoreProvider'
import { type DeepPartial } from '@reduxjs/toolkit'
import { type Decorator } from '@storybook/react'

export const StoreDecorator =
    (state: DeepPartial<StateSchema>): Decorator =>
    (StoryComponent) => (
        <StoreProvider initialState={state as StateSchema}>
            <StoryComponent />
        </StoreProvider>
    )
