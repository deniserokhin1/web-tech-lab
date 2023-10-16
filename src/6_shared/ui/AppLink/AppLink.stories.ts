import type { Meta, StoryObj } from '@storybook/react'
import { AppLink, AppLinkTheme } from './AppLink'
import { ThemeDecorator } from '@/6_shared/config/storybook/Decorators/ThemeDecorator'
import { Theme } from '@/1_app/providers/ThemeProvider'

const meta = {
    title: '6_shared/AppLink',
    component: AppLink,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        to: '/',
        children: 'Ссылка',
    },
} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>

export const PrimaryLight: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
    },
}

export const PrimaryDark: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
    },
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SecondaryLight: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY,
    },
}

export const SecondaryDark: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY,
    },
}
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]
