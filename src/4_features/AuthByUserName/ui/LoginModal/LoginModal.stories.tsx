import type { Meta, StoryObj } from '@storybook/react'

import { Theme } from '@/1_app/providers/ThemeProvider'
import { StoreDecorator } from '@/6_shared/config/storybook/Decorators/StoreDecorator'
import { ThemeDecorator } from '@/6_shared/config/storybook/Decorators/ThemeDecorator'

import { LoginModal } from './LoginModal'

const meta = {
    title: '4_features/LoginModal',
    component: LoginModal,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        storybook: true,
    },
} satisfies Meta<typeof LoginModal>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {
        isOpen: true,
    },
}
Light.decorators = [StoreDecorator({ login: { password: '123', username: 'user' } })]

export const Dark: Story = {
    args: {
        isOpen: true,
    },
}
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ login: { password: '123', username: 'user' } }),
]

export const Light_Error: Story = {
    args: {
        isOpen: true,
    },
}
Light_Error.decorators = [
    StoreDecorator({ login: { password: '123', username: 'user', error: 'Error' } }),
]

export const Dark_Error: Story = {
    args: {
        isOpen: true,
    },
}
Dark_Error.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ login: { password: '123', username: 'user', error: 'Error' } }),
]

export const Light_Loading: Story = {
    args: {
        isOpen: true,
    },
}
Light_Loading.decorators = [
    StoreDecorator({ login: { password: '123', username: 'user', isLoading: true } }),
]

export const Dark_Loading: Story = {
    args: {
        isOpen: true,
    },
}
Dark_Loading.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ login: { password: '123', username: 'user', isLoading: true } }),
]
