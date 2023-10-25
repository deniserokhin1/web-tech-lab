import type { Meta, StoryObj } from '@storybook/react'

import { Theme } from '@/1_app/providers/ThemeProvider'
import { ThemeDecorator } from '@/6_shared/config/storybook/Decorators/ThemeDecorator'

import { Modal } from './Modal'

const meta = {
    title: '6_shared/Modal',
    component: Modal,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {
        children: 'Модальное окно',
        isOpen: true,
    },
}

export const Dark: Story = {
    args: {
        children: 'Модальное окно',
        isOpen: true,
    },
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
