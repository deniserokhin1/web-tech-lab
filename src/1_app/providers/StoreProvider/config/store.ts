import {
    type ReducersMapObject,
    configureStore,
    type AnyAction,
    type ThunkDispatch,
} from '@reduxjs/toolkit'
import { type ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { type StateSchema } from './StateSchema'
import { userReducer } from '5_entities/User'
import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { createReducerManager } from './ReducerManager'

export const createReduxStore = (
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
): ToolkitStore<StateSchema> => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
    }

    const reducerManager = createReducerManager(rootReducer)

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    })

    // @ts-ignore
    store.reducerManager = reducerManager

    return store
}

export type AppStore = ReturnType<typeof createReduxStore>

type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>

export const useAppDispatch = (): TypedDispatch<ToolkitStore<StateSchema>> =>
    useDispatch<TypedDispatch<AppStore>>()

export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector
