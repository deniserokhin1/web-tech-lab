import type { Meta, StoryObj } from '@storybook/react'

import { Theme } from '@/1_app/providers/ThemeProvider'
import { StoreDecorator } from '@/6_shared/config/storybook/Decorators/StoreDecorator'
import { ThemeDecorator } from '@/6_shared/config/storybook/Decorators/ThemeDecorator'

import { NotificationButton } from './NotificationButton'

const meta = {
    title: '4_features/NotificationButton',
    component: NotificationButton,
    parameters: {
        layout: 'fullscreen',
        mockData: [
            {
                url: `${__API__}/notifications`,
                method: 'GET',
                status: 200,
                response: [
                    {
                        id: '1',
                        title: 'Уведомление для сторибука',
                        description: 'Описание уведомления для сторибука',
                    },
                    {
                        id: '2',
                        title: 'Уведомление для сторибука',
                        description: 'Описание уведомления для сторибука',
                    },
                ],
            },
        ],
    },
    args: {},
} satisfies Meta<typeof NotificationButton>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
}
Light.decorators = [
    StoreDecorator({
        ui: {
            bgColor: '#1e385c',
        },
    }),
]

export const Dark: Story = {
    args: {},
}
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        ui: {
            bgColor: '#ebefef',
        },
    }),
]
