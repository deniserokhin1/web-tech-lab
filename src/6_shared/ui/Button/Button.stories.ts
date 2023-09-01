import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonSize, ButtonTheme } from './Button'
import { ThemeDecorator } from '6_shared/config/storybook/Decorators/ThemeDecorator'
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

export const ClearDark: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
        children: 'Button',
    },
}
ClearDark.decorators = [ThemeDecorator(Theme.DARK)]

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

export const OutlineSizeL: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L,
        children: 'Button',
    },
}

export const Background: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
        children: 'Button',
    },
}

export const BackgroundDark: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
        children: 'Button',
    },
}
BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)]
