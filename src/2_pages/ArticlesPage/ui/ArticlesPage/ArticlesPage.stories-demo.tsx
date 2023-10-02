import type { Meta, StoryObj } from '@storybook/react'
import ArticlesPage from './ArticlesPage'
import { Theme } from '1_app/providers/ThemeProvider'
import { ThemeDecorator } from '6_shared/config/storybook/Decorators/ThemeDecorator'
import { StoreDecorator } from '6_shared/config/storybook/Decorators/StoreDecorator'
import { articles } from '../../mock/data'

const meta = {
    title: '2_pages/ArticlesPage',
    component: ArticlesPage,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof ArticlesPage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
}
Light.decorators = [
    StoreDecorator({
        articlesPage: {
            entities: {
                1: articles[0],
            },
            ids: ['1'],
        },
    }),
]

export const Dark: Story = {
    args: {},
}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
