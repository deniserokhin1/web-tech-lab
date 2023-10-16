import type { Meta, StoryObj } from '@storybook/react'
import { Sidebar } from './Sidebar'
import { Theme } from '@/1_app/providers/ThemeProvider'
import { ThemeDecorator } from '@/6_shared/config/storybook/Decorators/ThemeDecorator'
import { StoreDecorator } from '@/6_shared/config/storybook/Decorators/StoreDecorator'

const meta = {
    title: '3_widgets/Sidebar',
    component: Sidebar,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {
        color: '#ebebef',
    },
}
Light.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: 1,
                username: 'user',
            },
        },
    }),
]

export const Dark: Story = {
    args: {
        color: '#1e325c',
    },
}
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        user: {
            authData: {
                id: 1,
                username: 'user',
            },
        },
    }),
]
