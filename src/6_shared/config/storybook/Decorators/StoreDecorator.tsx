import {
    type StateSchema,
    StoreProvider,
} from '@/1_app/providers/StoreProvider'
import { articleDetailsPageReducer } from '@/2_pages/ArticleDetailsPage'
import { articlesPageReducer } from '@/2_pages/ArticlesPage'
import { addNewCommentReducer } from '@/4_features/AddNewComment'
import { loginReducer } from '@/4_features/AuthByUserName/testing'
import { profileReducer } from '@/4_features/EditableProfileCard/testing'
import { uiReducer } from '@/4_features/UI'
import { articleDetailsReducer } from '@/5_entities/Article'
import { type ReducersList } from '@/6_shared/lib/components/DynamicModuleLoader'
import { type Decorator } from '@storybook/react'

const defaultAsyncReducers: ReducersList = {
    login: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addNewCommentReducer,
    articleDeatailsPage: articleDetailsPageReducer,
    articlesPage: articlesPageReducer,
    ui: uiReducer,
}

export const StoreDecorator =
    (
        state: DeepPartial<StateSchema>,
        asyncReducers?: ReducersList,
    ): Decorator =>
    (StoryComponent) => (
        <StoreProvider
            initialState={state as StateSchema}
            asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
        >
            <StoryComponent />
        </StoreProvider>
    )
