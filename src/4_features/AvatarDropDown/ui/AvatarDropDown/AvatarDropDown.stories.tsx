import type { Meta, StoryObj } from '@storybook/react'

import { Theme } from '@/1_app/providers/ThemeProvider'
import { ThemeDecorator } from '@/6_shared/config/storybook/Decorators/ThemeDecorator'

import { AvatarDropDown } from './AvatarDropDown'

const meta = {
    title: '4_features/AvatarDropDown',
    component: AvatarDropDown,
    parameters: {
        layout: 'fullscreen',
    },
    args: {},
} satisfies Meta<typeof AvatarDropDown>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
}

export const Dark: Story = {
    args: {},
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
