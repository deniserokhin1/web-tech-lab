import { createAsyncThunk } from '@reduxjs/toolkit'

import { type ThunkConfig } from '@/1_app/providers/StoreProvider/config/StateSchema'
import { type IComment } from '@/5_entities/Comment'

export const fetchCommentsByArticleId = createAsyncThunk<
    IComment[],
    string | undefined,
    ThunkConfig<string>
>('articleDetailsPage/fetchCommentsByArticleId', async (articleId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi

    if (!articleId) rejectWithValue('error')

    try {
        const response = await extra.api.get<IComment[]>(`/comments`, {
            params: {
                articleId,
                _expand: 'user',
            },
        })

        if (!response.data) throw new Error()

        return response.data
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
        return rejectWithValue('Error while fetching comments by article id.')
    }
})
