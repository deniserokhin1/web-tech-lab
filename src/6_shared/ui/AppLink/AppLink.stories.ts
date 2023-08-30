import type { Meta, StoryObj } from '@storybook/react'
import { AppLink, AppLinkTheme } from './AppLink'
import {
    AppLinkDarkDecorator,
    AppLinkLightDecorator,
    ThemeDecorator,
} from '6_shared/config/storybook/Decorators/ThemeDecorator'
import { Theme } from '1_app/providers/ThemeProvider'

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

export const Primary_Light: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
    },
}
Primary_Light.decorators = [AppLinkLightDecorator, ThemeDecorator(Theme.DARK)]

export const Primary_Dark: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
    },
}
Primary_Dark.decorators = [AppLinkDarkDecorator]

export const Secondary_Light: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY,
    },
}
Secondary_Light.decorators = [AppLinkLightDecorator, ThemeDecorator(Theme.DARK)]

export const Secondary_Dark: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY,
    },
}
Secondary_Dark.decorators = [AppLinkDarkDecorator]
