import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextSize, TextTheme } from './Text'
import { ThemeDecorator } from '@/6_shared/config/storybook/Decorators/ThemeDecorator'
import { Theme } from '@/1_app/providers/ThemeProvider'

const meta = {
    title: '6_shared/Text',
    component: Text,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {
        text: 'Text',
        title: 'Title',
    },
}

export const Light_Size_L: Story = {
    args: {
        text: 'Text',
        title: 'Title',
        size: TextSize.L,
    },
}

export const Dark: Story = {
    args: {
        text: 'Text',
        title: 'Title',
    },
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Only_Title: Story = {
    args: {
        title: 'Title',
    },
}

export const Only_Text: Story = {
    args: {
        text: 'Text',
    },
}

export const Error: Story = {
    args: {
        text: 'Text',
        title: 'Title',
        theme: TextTheme.ERROR,
    },
}

export const Error_Dark: Story = {
    args: {
        text: 'Text',
        title: 'Title',
        theme: TextTheme.ERROR,
    },
}
Error_Dark.decorators = [ThemeDecorator(Theme.DARK)]
