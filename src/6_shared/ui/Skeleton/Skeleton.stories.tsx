import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './Skeleton'
import { Theme } from '1_app/providers/ThemeProvider'
import { ThemeDecorator } from '6_shared/config/storybook/Decorators/ThemeDecorator'

const meta = {
    title: '6_shared/Skeleton',
    component: Skeleton,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {
        width: 200,
        height: 100,
    },
}

export const Light_Circle: Story = {
    args: {
        borderRadius: '50%',
        width: 100,
        height: 100,
    },
}

export const Dark: Story = {
    args: {
        width: 200,
        height: 100,
    },
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Green: Story = {
    args: {
        width: 200,
        height: 100,
    },
}
Green.decorators = [ThemeDecorator(Theme.GREEN)]
