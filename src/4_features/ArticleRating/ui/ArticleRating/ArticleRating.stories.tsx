import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '1_app/providers/ThemeProvider'
import { ThemeDecorator } from '6_shared/config/storybook/Decorators/ThemeDecorator'
import { ArticleRating } from './ArticleRating'

const meta = {
    title: '4_features/ArticleRating',
    component: ArticleRating,
    parameters: {
        layout: 'fullscreen',
    },
    args: {},
} satisfies Meta<typeof ArticleRating>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
}

export const Dark: Story = {
    args: {},
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
