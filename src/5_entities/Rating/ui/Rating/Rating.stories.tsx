import type { Meta, StoryObj } from '@storybook/react'
import { Rating } from './Rating'
import { Theme } from '@/1_app/providers/ThemeProvider'
import { ThemeDecorator } from '@/6_shared/config/storybook/Decorators/ThemeDecorator'

const meta = {
    title: '5_entities/Rating',
    component: Rating,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof Rating>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
}

export const Dark: Story = {
    args: {},
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
