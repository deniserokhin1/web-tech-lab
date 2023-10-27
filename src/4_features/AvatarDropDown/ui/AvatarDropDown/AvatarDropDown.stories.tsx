import type { Meta, StoryObj } from '@storybook/react'

import { Theme } from '@/1_app/providers/ThemeProvider'
import { UserRole } from '@/5_entities/User'
import { StoreDecorator } from '@/6_shared/config/storybook/Decorators/StoreDecorator'
import { ThemeDecorator } from '@/6_shared/config/storybook/Decorators/ThemeDecorator'
import { avatar } from '@/6_shared/testing'

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
Light.decorators = [
    StoreDecorator({
        user: {
            authData: {
                roles: [UserRole.ADMIN],
                avatar,
            },
        },
    }),
]

export const Dark: Story = {
    args: {},
}
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        user: {
            authData: {
                roles: [UserRole.ADMIN],
                avatar,
            },
        },
    }),
]
