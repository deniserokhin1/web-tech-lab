import type { Meta, StoryObj } from '@storybook/react'

import { Theme } from '@/1_app/providers/ThemeProvider'
import { ThemeDecorator } from '@/6_shared/config/storybook/Decorators/ThemeDecorator'

import { Text } from '../Text/Text'

import { Card } from './Card'

const meta = {
    title: '6_shared/Card',
    component: Card,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        children: <Text text="Component Card" />,
    },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
}

export const Dark: Story = {
    args: {},
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
