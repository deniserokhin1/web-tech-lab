import { createAsyncThunk } from '@reduxjs/toolkit'

import {
    type StateSchema,
    type ThunkConfig,
} from '@/1_app/providers/StoreProvider/config/StateSchema'
import { addNewCommentActions } from '@/4_features/AddNewComment'
import { getArticleDetailsData } from '@/5_entities/Article'
import { type IComment } from '@/5_entities/Comment'
import { getUserAuthData } from '@/5_entities/User'

import { fetchCommentsByArticleId } from './fetchCommentsByArticleId'

export const addCommentForArticle = createAsyncThunk<IComment, string, ThunkConfig<string>>(
    'articleDetails/sendComment',
    async (textParam, thunkApi) => {
        const { dispatch, extra, rejectWithValue, getState } = thunkApi

        const userData = getUserAuthData(getState() as StateSchema)
        const article = getArticleDetailsData(getState() as StateSchema)
        const text = textParam.trim()

        if (!userData || !text || !article) return rejectWithValue('no data')

        try {
            const response = await extra.api.post<IComment>(`/comments`, {
                articleId: article?.id,
                userId: userData?.id,
                text,
            })

            if (!response.data) throw new Error()

            dispatch(addNewCommentActions.setClick(true))

            return response.data
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error)
            return rejectWithValue('Error while posting comment.')
        } finally {
            dispatch(fetchCommentsByArticleId(article?.id))
        }
    },
)
