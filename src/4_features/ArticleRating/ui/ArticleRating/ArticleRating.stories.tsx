import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/1_app/providers/ThemeProvider'
import { ThemeDecorator } from '@/6_shared/config/storybook/Decorators/ThemeDecorator'
import ArticleRating from './ArticleRating'
import { StoreDecorator } from '@/6_shared/config/storybook/Decorators/StoreDecorator'

const meta = {
    title: '4_features/ArticleRating',
    component: ArticleRating,
    parameters: {
        layout: 'fullscreen',
        mockData: [
            {
                url: `${__API__}/article-ratings?userId=1&articleId=1`,
                method: 'GET',
                status: 200,
                response: [
                    {
                        rate: 4,
                    },
                ],
            },
        ],
    },
    args: {
        articleId: '1',
    },
} satisfies Meta<typeof ArticleRating>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
}
Light.decorators = [StoreDecorator({ user: { authData: { id: '1' } } })]

export const Light_With_Out_Rate: Story = {
    args: {},
    parameters: {
        layout: 'fullscreen',
        mockData: [
            {
                url: `${__API__}/article-ratings?userId=1&articleId=1`,
                method: 'GET',
                status: 200,
                response: [],
            },
        ],
    },
}
Light_With_Out_Rate.decorators = [
    StoreDecorator({ user: { authData: { id: '1' } } }),
]

export const Dark: Story = {
    args: {},
}
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ user: { authData: { id: '1' } } }),
]
