import { type AnyAction, type Reducer, type ReducersMapObject, combineReducers } from '@reduxjs/toolkit'

import {
    type MountedReducers,
    type ReducerManger,
    type StateSchema,
    type StateSchemaKey,
} from './StateSchema'

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): ReducerManger {
    const reducers = { ...initialReducers }

    let combinedReducer = combineReducers(reducers)

    let keysToRemove: StateSchemaKey[] = []
    const mountedReducers: MountedReducers = {}

    return {
        getReducerMap: () => reducers,
        getMountedReducer: () => mountedReducers,
        reduce: (state: StateSchema, action: AnyAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state }
                for (const key of keysToRemove) {
                    delete state[key]
                }
                keysToRemove = []
            }
            return combinedReducer(state, action)
        },

        add: (key: StateSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return
            }
            reducers[key] = reducer
            mountedReducers[key] = true
            combinedReducer = combineReducers(reducers)
        },

        remove: (key: StateSchemaKey) => {
            if (!key || !reducers[key]) {
                return
            }

            delete reducers[key]
            mountedReducers[key] = false
            keysToRemove.push(key)

            combinedReducer = combineReducers(reducers)
        },
    }
}
