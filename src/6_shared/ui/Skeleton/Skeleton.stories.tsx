import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './Skeleton'
import { Theme } from '@/1_app/providers/ThemeProvider'
import { ThemeDecorator } from '@/6_shared/config/storybook/Decorators/ThemeDecorator'

const meta = {
    title: '6_shared/Skeleton',
    component: Skeleton,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        width: 200,
        height: 100,
        borderRadius: '6px',
    },
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}

export const Light_Circle: Story = {
    args: {
        width: 100,
        height: 100,
        borderRadius: '50%',
    },
}

export const Dark: Story = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Green: Story = {}
Green.decorators = [ThemeDecorator(Theme.GREEN)]
