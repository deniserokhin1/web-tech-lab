import type { Meta, StoryObj } from '@storybook/react'

import { Theme } from '@/1_app/providers/ThemeProvider'
import { ThemeDecorator } from '@/6_shared/config/storybook/Decorators/ThemeDecorator'

import { SpinerDots } from './SpinerDots'

const meta = {
    title: '6_shared/SpinerDots',
    component: SpinerDots,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof SpinerDots>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
}

export const Dark: Story = {
    args: {},
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
