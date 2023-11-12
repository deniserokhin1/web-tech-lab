import type { Meta, StoryObj } from '@storybook/react'

import { Theme } from '@/1_app/providers/ThemeProvider'

import { ThemeDecorator } from '../../config/storybook/Decorators/ThemeDecorator'

import { Avatar } from './Avatar'

const meta = {
    title: '6_shared/Avatar',
    component: Avatar,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        src: 'https://img.freepik.com/free-vector/creative-hacker-logo-template_23-2149199402.jpg?w=2000',
    },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
}

export const Dark: Story = {
    args: {},
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
