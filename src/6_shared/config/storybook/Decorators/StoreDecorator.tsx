import { type StateSchema, StoreProvider } from '1_app/providers/StoreProvider'
import { articlesPageReducer } from '2_pages/ArticlesPage/model/slice/articlesPageSlice'
import { addNewCommentReducer } from '4_features/AddNewComment/model/slice/addCommentFormSlice'
import { loginReducer } from '4_features/AuthByUserName/model/slice/loginSlice'
import { articleDetailsReducer } from '5_entities/Article'
import { profileReducer } from '5_entities/Profile'
import { type ReducersList } from '6_shared/lib/components/DynamicModuleLoader'
import { type Decorator } from '@storybook/react'

const defaultAsyncReducers: ReducersList = {
    login: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addNewCommentReducer,
    articleDetailsComments: articleDetailsReducer,
    articlesPage: articlesPageReducer,
}

export const StoreDecorator =
    (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList): Decorator =>
    (StoryComponent) => (
        <StoreProvider
            initialState={state as StateSchema}
            asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
        >
            <StoryComponent />
        </StoreProvider>
    )
