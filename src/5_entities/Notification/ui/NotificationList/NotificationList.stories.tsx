import type { Meta, StoryObj } from '@storybook/react'
import { NotificationList } from './NotificationList'
import { Theme } from '1_app/providers/ThemeProvider'
import { ThemeDecorator } from '6_shared/config/storybook/Decorators/ThemeDecorator'

const meta = {
    title: '/NotificationList',
    component: NotificationList,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof NotificationList>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
}

export const Dark: Story = {
    args: {},
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
