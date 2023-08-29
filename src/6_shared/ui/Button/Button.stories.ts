import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonTheme } from './Button'
import { ClearButtonDecorator, ThemeDecorator } from '6_shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '1_app/providers/ThemeProvider'

const meta = {
    title: '6_shared/Button',
    component: Button,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Clear: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
        children: 'Button',
    },
}
Clear.decorators = [ClearButtonDecorator]

export const Outline: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Button',
    },
}

export const OutlineDark: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Button',
    },
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]
