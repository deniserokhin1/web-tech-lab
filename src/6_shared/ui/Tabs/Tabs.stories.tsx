import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Tabs } from './Tabs'
import { Theme } from '1_app/providers/ThemeProvider'
import { ThemeDecorator } from '6_shared/config/storybook/Decorators/ThemeDecorator'

const meta = {
    title: '6_shared/Tabs',
    component: Tabs,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        tabs: [
            {
                content: 'Tab 1',
                value: '1',
            },
            {
                content: 'Tab 2',
                value: '2',
            },
            {
                content: 'Tab 3',
                value: '3',
            },
        ],
        value: '2',
        onTabClick: action('onTabClick'),
    },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
}

export const Dark: Story = {
    args: {},
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
