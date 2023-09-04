import type { Meta, StoryObj } from '@storybook/react'
import { LoginModal } from './LoginModal'
import { ThemeDecorator } from '6_shared/config/storybook/Decorators/ThemeDecorator'
import { Theme } from '1_app/providers/ThemeProvider'

const meta = {
    title: '4_features/LoginModal',
    component: LoginModal,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof LoginModal>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {
        isOpen: true,
    },
}

export const Dark: Story = {
    args: {
        isOpen: true,
    },
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
