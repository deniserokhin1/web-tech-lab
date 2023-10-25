import type { Meta, StoryObj } from '@storybook/react'

import { Theme } from '@/1_app/providers/ThemeProvider'
import { StoreDecorator } from '@/6_shared/config/storybook/Decorators/StoreDecorator'
import { ThemeDecorator } from '@/6_shared/config/storybook/Decorators/ThemeDecorator'

import { ListBox } from './ListBox'

const meta = {
    title: '6_shared/ListBox',
    component: ListBox,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        value: '1',
        items: [
            {
                content: 'First',
                value: '1',
            },
            {
                content: 'Second',
                value: '2',
            },
            {
                content: 'Third',
                value: '3',
            },
        ],
    },
} satisfies Meta<typeof ListBox>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
}
Light.decorators = [
    StoreDecorator({
        ui: {
            secondaryColor: '#1c58d9',
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
            secondaryColor: '#eee',
        },
    }),
]
