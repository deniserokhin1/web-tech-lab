import type { Meta, StoryObj } from '@storybook/react'

import { Theme } from '@/1_app/providers/ThemeProvider'
import { StoreDecorator } from '@/6_shared/config/storybook/Decorators/StoreDecorator'
import { ThemeDecorator } from '@/6_shared/config/storybook/Decorators/ThemeDecorator'

import { NotificationList } from './NotificationList'

const meta = {
    title: '5_entities/NotificationList',
    component: NotificationList,
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
                        title: 'Заголовок 1',
                        description: 'Описание 1',
                    },
                    {
                        id: '2',
                        title: 'Заголовок 2',
                        description: 'Описание 2',
                    },
                    {
                        id: '3',
                        title: 'Заголовок 3',
                        description: 'Описание 3',
                    },
                ],
                delay: 1000,
            },
        ],
    },
} satisfies Meta<typeof NotificationList>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
}
Light.decorators = [StoreDecorator({})]

export const Dark: Story = {
    args: {},
}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
