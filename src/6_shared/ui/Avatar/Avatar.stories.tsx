import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'
import { ThemeDecorator } from '../../config/storybook/Decorators/ThemeDecorator'
import { Theme } from '1_app/providers/ThemeProvider'
import AvatarImg from './user.png'

const meta = {
    title: '6_shared/Avatar',
    component: Avatar,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        size: 100,
        src: AvatarImg
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
