import type { Meta, StoryObj } from '@storybook/react'

import { Theme } from '@/1_app/providers/ThemeProvider'
import { StoreDecorator } from '@/6_shared/config/storybook/Decorators/StoreDecorator'
import { ThemeDecorator } from '@/6_shared/config/storybook/Decorators/ThemeDecorator'

import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader'

const meta = {
    title: '2_pages/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof ArticleDetailsPageHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
}
Light.decorators = [
    StoreDecorator({
        ui: {
            bgColor: '#1e325c',
        },
    }),
]

export const Dark: Story = {
    args: {},
}
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        ui: {
            bgColor: '#fff',
        },
    }),
]
