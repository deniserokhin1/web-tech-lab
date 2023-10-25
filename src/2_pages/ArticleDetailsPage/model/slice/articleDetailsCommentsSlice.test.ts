import { type IComment } from '@/5_entities/Comment'

import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId'
import { type ArticleDetailsCommentsSchema } from '../types/articleDetailsCommentsSchema'

import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice'

const data: IComment[] = [
    {
        id: '1',
        text: 'Comment 1',
        user: {
            id: '1',
            username: 'Den',
        },
    },
    {
        id: '2',
        text: 'Comment 2',
        user: {
            id: '1',
            username: 'Leon',
        },
    },
]

describe('articleDetailsCommentsSlice', () => {
    test('test fetching comments service pending', () => {
        const state: DeepPartial<ArticleDetailsCommentsSchema> = {
            isLoading: false,
        }

        expect(
            articleDetailsCommentsReducer(
                state as ArticleDetailsCommentsSchema,
                fetchCommentsByArticleId.pending,
            ),
        ).toEqual({
            isLoading: true,
        })
    })

    test('test fetching comments service fullfiled', () => {
        const state: DeepPartial<ArticleDetailsCommentsSchema> = {
            isLoading: true,
        }

        expect(
            articleDetailsCommentsReducer(
                state as ArticleDetailsCommentsSchema,
                fetchCommentsByArticleId.fulfilled(data, '', ''),
            ),
        ).toEqual({
            isLoading: false,
            ids: ['1', '2'],
            entities: {
                1: {
                    id: '1',
                    text: 'Comment 1',
                    user: { id: '1', username: 'Den' },
                },
                2: {
                    id: '2',
                    text: 'Comment 2',
                    user: { id: '1', username: 'Leon' },
                },
            },
        })
    })
})
