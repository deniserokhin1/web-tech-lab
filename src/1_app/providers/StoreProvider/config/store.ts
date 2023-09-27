import {
    type ReducersMapObject,
    configureStore,
    type AnyAction,
    type ThunkDispatch,
    type CombinedState,
    type Reducer,
} from '@reduxjs/toolkit'
import { type ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { type ThunkExtraArg, type StateSchema } from './StateSchema'
import { userReducer } from '5_entities/User'
import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { createReducerManager } from './ReducerManager'
import { $api } from '6_shared/api/api'
import { uiReducer } from '4_features/UI'

export const createReduxStore = (
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
): ToolkitStore<StateSchema> => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
        ui: uiReducer,
    }

    const reducerManager = createReducerManager(rootReducer)

    const extraArg: ThunkExtraArg = {
        api: $api,
    }

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg,
                },
            }),
    })

    // @ts-ignore
    store.reducerManager = reducerManager

    return store
}

export type AppStore = ReturnType<typeof createReduxStore>

export type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>

export const useAppDispatch = (): TypedDispatch<ToolkitStore<StateSchema>> =>
    useDispatch<TypedDispatch<AppStore>>()

export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector
