import type { Meta, StoryObj } from '@storybook/react'
import { Sidebar } from './Sidebar'
import { Theme } from '1_app/providers/ThemeProvider'
import { ThemeDecorator } from '6_shared/config/storybook/Decorators/ThemeDecorator'

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

export const Dark: Story = {
    args: {
        color: '#1e325c',
    },
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
