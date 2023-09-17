import { type ArticleDetailsCommentsSchema } from '2_pages/ArticleDetailsPage'
import { type AddCommentFormSchema } from '4_features/AddNewComment'
import { type LoginSchema } from '4_features/AuthByUserName'
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
    login?: LoginSchema
    profile?: ProfileSchema
    articleDetails?: ArticleDetailsSchema
    articleDetailsComments?: ArticleDetailsCommentsSchema
    addCommentForm?: AddCommentFormSchema
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

export interface ThunkExtraArg {
    api: AxiosInstance
    navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
}
