import {
    type ReducersMapObject,
    configureStore,
    type AnyAction,
    type ThunkDispatch,
} from '@reduxjs/toolkit'
import { type ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { type StateSchema } from './StateSchema'
import { userReducer } from '5_entities/User'
import { loginReducer } from '4_features/AuthByUserName'
import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const createReduxStore = (
    initialState?: StateSchema,
): ToolkitStore<StateSchema> => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        user: userReducer,
        login: loginReducer,
    }
    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    })
}

export type AppStore = ReturnType<typeof createReduxStore>

type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>

export const useAppDispatch = (): TypedDispatch<ToolkitStore<StateSchema, AnyAction>> =>
    useDispatch<TypedDispatch<AppStore>>()

export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector
