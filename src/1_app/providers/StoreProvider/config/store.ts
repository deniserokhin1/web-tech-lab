import { type ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { type ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { type StateSchema } from './StateSchema'
import { userReducer } from '5_entities/User'

export const createRedxuStore = (initialState?: StateSchema): ToolkitStore => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        user: userReducer,
    }
    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    })
}
