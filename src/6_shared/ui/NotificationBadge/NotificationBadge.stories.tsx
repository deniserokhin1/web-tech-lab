import type { Meta, StoryObj } from '@storybook/react'

import { Theme } from '@/1_app/providers/ThemeProvider'
import { ThemeDecorator } from '@/6_shared/config/storybook/Decorators/ThemeDecorator'

import { NotificationBadge } from './NotificationBadge'

const meta = {
    title: '6_shared/NotificationBadge',
    component: NotificationBadge,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof NotificationBadge>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {
        amount: 5,
    },
}

export const Dark: Story = {
    args: {
        amount: 5,
    },
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
