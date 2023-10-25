import type { Meta, StoryObj } from '@storybook/react'

import { Theme } from '@/1_app/providers/ThemeProvider'
import avatar2 from '@/6_shared/assets/img/avatar-2.jpg'
import avatar from '@/6_shared/assets/img/hacker-logo.jpg'
import { ThemeDecorator } from '@/6_shared/config/storybook/Decorators/ThemeDecorator'

import { CommentList } from './CommentList'

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
