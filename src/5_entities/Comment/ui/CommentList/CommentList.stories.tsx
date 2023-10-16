import type { Meta, StoryObj } from '@storybook/react'
import { CommentList } from './CommentList'
import { Theme } from '@/1_app/providers/ThemeProvider'
import { ThemeDecorator } from '@/6_shared/config/storybook/Decorators/ThemeDecorator'
import avatar from '@/6_shared/assets/img/hacker-logo.jpg'
import avatar2 from '@/6_shared/assets/img/avatar-2.jpg'

const meta = {
    title: '5_entities/CommentList',
    component: CommentList,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        comments: [
            {
                id: '1',
                text: 'Comment 1',
                user: {
                    id: '1',
                    username: 'Den',
                    avatar,
                },
            },
            {
                id: '2',
                text: 'Comment 2',
                user: {
                    id: '1',
                    username: 'Leon',
                    avatar: avatar2,
                },
            },
        ],
    },
} satisfies Meta<typeof CommentList>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}

export const Dark: Story = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
