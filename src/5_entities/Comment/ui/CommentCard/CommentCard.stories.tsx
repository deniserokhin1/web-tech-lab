import type { Meta, StoryObj } from '@storybook/react'
import { CommentCard } from './CommentCard'
import { Theme } from '1_app/providers/ThemeProvider'
import { ThemeDecorator } from '6_shared/config/storybook/Decorators/ThemeDecorator'

const meta = {
    title: '5_entities/CommentCard',
    component: CommentCard,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        comment: {
            id: '1',
            text: 'Это тестовый комментарий для сторибука',
            user: {
                id: '1',
                username: 'Denis',
            },
        },
    },
} satisfies Meta<typeof CommentCard>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}

export const Light_Loading: Story = {
    args: {
        isLoading: true,
    },
}

export const Dark: Story = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Dark_Loading: Story = {
    args: {
        isLoading: true,
    },
}
Dark_Loading.decorators = [ThemeDecorator(Theme.DARK)]
