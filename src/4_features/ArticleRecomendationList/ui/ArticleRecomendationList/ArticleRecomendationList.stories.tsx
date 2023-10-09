import { Theme } from '1_app/providers/ThemeProvider'
import { article } from '5_entities/Article/mocks/data'
import { StoreDecorator } from '6_shared/config/storybook/Decorators/StoreDecorator'
import { ThemeDecorator } from '6_shared/config/storybook/Decorators/ThemeDecorator'
import type { Meta, StoryObj } from '@storybook/react'
import { ArticleRecomendationList } from './ArticleRecomendationList'

const meta = {
    title: '4_features/ArticleRecomendationList',
    component: ArticleRecomendationList,
    parameters: {
        layout: 'fullscreen',
        mockData: [
            {
                url: `${__API__}/articles?_limit=3`,
                method: 'GET',
                status: 200,
                response: [
                    { ...article, id: 1 },
                    { ...article, id: 2 },
                    { ...article, id: 3 },
                ],
            },
        ],
    },
    args: {},
} satisfies Meta<typeof ArticleRecomendationList>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
}
Light.decorators = [StoreDecorator({})]

export const Dark: Story = {
    args: {},
}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
