import type { Meta, StoryObj } from '@storybook/react'

import { Theme } from '@/1_app/providers/ThemeProvider'
import { ThemeDecorator } from '@/6_shared/config/storybook/Decorators/ThemeDecorator'

import { NotificationItem } from './NotificationItem'

const meta = {
    title: '5_entities/NotificationItem',
    component: NotificationItem,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        item: {
            id: '1',
            title: 'Заголовок уведомления',
            description: 'Уведомление для сторибука',
        },
    },
} satisfies Meta<typeof NotificationItem>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
}

export const Dark: Story = {
    args: {},
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
