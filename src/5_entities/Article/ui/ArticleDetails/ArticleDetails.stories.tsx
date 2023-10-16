import type { Meta, StoryObj } from '@storybook/react'
import { ArticleDetails } from './ArticleDetails'
import { Theme } from '@/1_app/providers/ThemeProvider'
import { ThemeDecorator } from '@/6_shared/config/storybook/Decorators/ThemeDecorator'
import { StoreDecorator } from '@/6_shared/config/storybook/Decorators/StoreDecorator'
import { article } from '../../mocks/data'

const meta = {
    title: '5_entities/ArticleDetails',
    component: ArticleDetails,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        id: '1',
    },
} satisfies Meta<typeof ArticleDetails>

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
        ui: {
            bgColor: '#1e325c',
        },
    }),
]

export const Light_Loading: Story = {
    args: {},
}
Light_Loading.decorators = [
    StoreDecorator({
        articleDetails: {
            isLoading: true,
        },
    }),
]

export const Light_Error: Story = {
    args: {},
}
Light_Error.decorators = [
    StoreDecorator({
        articleDetails: {
            error: 'Error',
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
        ui: {
            primaryColor: '#fff',
        },
    }),
]

export const Dark_Loading: Story = {
    args: {},
}
Dark_Loading.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        articleDetails: {
            isLoading: true,
        },
    }),
]

export const Dark_Error: Story = {
    args: {},
}
Dark_Error.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        articleDetails: {
            error: 'Error',
        },
    }),
]
