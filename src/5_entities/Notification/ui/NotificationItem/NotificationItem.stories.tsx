import type { Meta, StoryObj } from '@storybook/react'
import { NotificationItem } from './NotificationItem'
import { Theme } from '1_app/providers/ThemeProvider'
import { ThemeDecorator } from '6_shared/config/storybook/Decorators/ThemeDecorator'

const meta = {
    title: '/NotificationItem',
    component: NotificationItem,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof NotificationItem>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {
        
    },
}

export const Dark: Story = {
    args: {},
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
