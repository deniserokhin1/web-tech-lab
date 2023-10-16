import type { Meta, StoryObj } from '@storybook/react'
import { SpinerDots } from './SpinerDots'
import { ThemeDecorator } from '@/6_shared/config/storybook/Decorators/ThemeDecorator'
import { Theme } from '@/1_app/providers/ThemeProvider'

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
