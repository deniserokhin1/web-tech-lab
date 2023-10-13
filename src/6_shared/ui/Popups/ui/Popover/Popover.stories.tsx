import type { Meta, StoryObj } from '@storybook/react'
import { Popover } from './Popover'
import { Theme } from '1_app/providers/ThemeProvider'
import { ThemeDecorator } from '6_shared/config/storybook/Decorators/ThemeDecorator'

const meta = {
    title: '/Popover',
    component: Popover,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        children: <div></div>,
    },
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}

export const Dark: Story = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
