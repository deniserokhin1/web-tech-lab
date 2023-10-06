import type { Meta, StoryObj } from '@storybook/react'
import { Select, type SelectOption } from './Select'
import { ThemeDecorator } from '6_shared/config/storybook/Decorators/ThemeDecorator'
import { Theme } from '1_app/providers/ThemeProvider'
import { StoreDecorator } from '6_shared/config/storybook/Decorators/StoreDecorator'

const options: Array<SelectOption<string>> = [
    {
        content: 'Первый пункт',
        value: 'Первый пункт',
    },
    {
        content: 'Второй пункт',
        value: 'Второй пункт',
    },
    {
        content: 'Третий пункт',
        value: 'Третий пункт',
    },
]

const meta = {
    title: '6_shared/Select',
    component: Select,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        options,
        label: 'Укажите значение',
        value: 'Первый пункт',
    },
} satisfies Meta<typeof Select>

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
