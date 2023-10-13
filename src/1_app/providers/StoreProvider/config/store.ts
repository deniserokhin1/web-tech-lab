import { uiReducer } from '4_features/UI'
import { userReducer } from '5_entities/User'
import { $api } from '6_shared/api/api'
import { rtkAPI } from '6_shared/api/rtkApi'
import {
    configureStore,
    type AnyAction,
    type CombinedState,
    type Reducer,
    type ReducersMapObject,
    type ThunkDispatch,
} from '@reduxjs/toolkit'
import { type ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux'
import { createReducerManager } from './ReducerManager'
import { type StateSchema, type ThunkExtraArg } from './StateSchema'

export const createReduxStore = (
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
): ToolkitStore<StateSchema> => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
        ui: uiReducer,
        [rtkAPI.reducerPath]: rtkAPI.reducer,
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
            }).concat(rtkAPI.middleware),
    })

    // @ts-ignore
    store.reducerManager = reducerManager

    return store
}

export type AppStore = ReturnType<typeof createReduxStore>

export type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>

export const useAppDispatch = (): TypedDispatch<ToolkitStore<StateSchema>> =>
    useDispatch<TypedDispatch<AppStore>>()

// export const useAppDispatch = (): Dispatch<AnyAction> => useDispatch<ReturnType<typeof createReduxStore>['dispatch']>()

export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector
