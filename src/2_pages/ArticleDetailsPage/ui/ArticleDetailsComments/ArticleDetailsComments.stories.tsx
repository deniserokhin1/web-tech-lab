import type { Meta, StoryObj } from '@storybook/react'

import { Theme } from '@/1_app/providers/ThemeProvider'
import { StoreDecorator } from '@/6_shared/config/storybook/Decorators/StoreDecorator'
import { ThemeDecorator } from '@/6_shared/config/storybook/Decorators/ThemeDecorator'

import { ArticleDetailsComments } from './ArticleDetailsComments'

const meta = {
    title: '2_pages/ArticleDetailsComments',
    component: ArticleDetailsComments,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof ArticleDetailsComments>

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
