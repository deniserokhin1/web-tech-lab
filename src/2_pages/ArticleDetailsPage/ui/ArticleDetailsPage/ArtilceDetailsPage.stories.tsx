import type { Meta, StoryObj } from '@storybook/react'
import ArticleDetailsPage from './ArticleDetailsPage'
import { Theme } from '1_app/providers/ThemeProvider'
import { ThemeDecorator } from '6_shared/config/storybook/Decorators/ThemeDecorator'
import { StoreDecorator } from '6_shared/config/storybook/Decorators/StoreDecorator'
import { article } from '5_entities/Article/mocks/data'

const meta = {
    title: '2_pages/ArticleDetailsPage',
    component: ArticleDetailsPage,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof ArticleDetailsPage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
}
Light.decorators = [
    StoreDecorator({
        articleDetails: {
            data: article,
        },
        articleDetailsComments: {
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
        },
    }),
]

export const Light_No_Comments: Story = {
    args: {},
}
Light_No_Comments.decorators = [
    StoreDecorator({
        articleDetails: {
            data: article,
        },
        articleDetailsComments: {
            ids: [],
            entities: {},
        },
    }),
]

export const Dark: Story = {
    args: {},
}
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        articleDetails: {
            data: article,
        },
        articleDetailsComments: {
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
        },
    }),
]

export const Dark_No_Comments: Story = {
    args: {},
}
Dark_No_Comments.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        articleDetails: {
            data: article,
        },
        articleDetailsComments: {
            ids: [],
            entities: {},
        },
    }),
]
