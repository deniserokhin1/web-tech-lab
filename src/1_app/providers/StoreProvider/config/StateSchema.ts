import { type Reducer, type AnyAction, type CombinedState, type EnhancedStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { type AxiosInstance } from 'axios'
import { type NavigateOptions, type To } from 'react-router-dom'

import { type ArticleDetailsPageSchema } from '@/2_pages/ArticleDetailsPage'
import { type ArticlesPageSchema } from '@/2_pages/ArticlesPage'
import { type AddCommentFormSchema } from '@/4_features/AddNewComment'
import { type LoginSchema } from '@/4_features/AuthByUserName'
import { type EditableProfileCardSchema } from '@/4_features/EditableProfileCard'
import { TechnologiesListSchema } from '@/4_features/TechnologiesList'
import { type UISchema } from '@/4_features/UI'
import { type ArticleDetailsSchema } from '@/5_entities/Article'
import { type UserSchema } from '@/5_entities/User'
import { type rtkAPI } from '@/6_shared/api/rtkApi'

export interface StateSchema {
    user: UserSchema
    ui: UISchema
    [rtkAPI.reducerPath]: ReturnType<typeof rtkAPI.reducer>
    login?: LoginSchema
    profile?: EditableProfileCardSchema
    articleDetails?: ArticleDetailsSchema
    addCommentForm?: AddCommentFormSchema
    articlesPage?: ArticlesPageSchema
    articleDeatailsPage?: ArticleDetailsPageSchema
    technologiesList?: TechnologiesListSchema
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
