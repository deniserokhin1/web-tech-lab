import { type ArticleDetailsPageSchema } from '2_pages/ArticleDetailsPage'
import { type ArticlesPageSchema } from '2_pages/ArticlesPage'
import { type AddCommentFormSchema } from '4_features/AddNewComment'
import { type LoginSchema } from '4_features/AuthByUserName'
import { type UISchema } from '4_features/UI'
import { type ArticleDetailsSchema } from '5_entities/Article'
import { type ProfileSchema } from '5_entities/Profile'
import { type UserSchema } from '5_entities/User'
import {
    type Reducer,
    type AnyAction,
    type CombinedState,
    type EnhancedStore,
    type ReducersMapObject,
} from '@reduxjs/toolkit'
import { type AxiosInstance } from 'axios'
import { type NavigateOptions, type To } from 'react-router-dom'

export interface StateSchema {
    user: UserSchema
    ui: UISchema
    login?: LoginSchema
    profile?: ProfileSchema
    articleDetails?: ArticleDetailsSchema
    addCommentForm?: AddCommentFormSchema
    articlesPage?: ArticlesPageSchema
    articleDeatailsPage?: ArticleDetailsPageSchema
}

export type StateSchemaKey = keyof StateSchema
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManger {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
    getMountedReducer: () => MountedReducers
}

export interface ReduxStoreWidthManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManger
}

export interface ThunkExtraArg {
    api: AxiosInstance
    navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
}
