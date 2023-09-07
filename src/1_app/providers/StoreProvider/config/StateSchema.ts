import { type LoginSchema } from '4_features/AuthByUserName'
import { type ProfileSchema } from '5_entities/Profile'
import { type UserSchema } from '5_entities/User'
import {
    type Reducer,
    type AnyAction,
    type CombinedState,
    type EnhancedStore,
    type ReducersMapObject,
} from '@reduxjs/toolkit'

export interface StateSchema {
    user: UserSchema
    login?: LoginSchema
    profile?: ProfileSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManger {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWidthManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManger
}
