import { configureStore } from '@reduxjs/toolkit'
import { type ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { type StateSchema } from './StateSchema'
import { counterReducer } from '5_entities/Counter'

export const createRedxuStore = (initialState?: StateSchema): ToolkitStore => {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    })
}
