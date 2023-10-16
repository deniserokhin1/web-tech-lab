import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/1_app/providers/ThemeProvider'
import { ThemeDecorator } from '@/6_shared/config/storybook/Decorators/ThemeDecorator'
import { EditableProfileCard } from './EditableProfileCard'
import { StoreDecorator } from '@/6_shared/config/storybook/Decorators/StoreDecorator'
import { Currency } from '@/5_entities/Currency'
import { Country } from '@/5_entities/Country'

const meta = {
    title: '4_features/EditableProfileCard',
    component: EditableProfileCard,
    parameters: {
        layout: 'fullscreen',
    },
    args: {},
} satisfies Meta<typeof EditableProfileCard>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
}
Light.decorators = [
    StoreDecorator({
        profile: {
            readonly: true,
            form: {
                first: 'Денис',
                lastname: 'Ерохин',
                age: 32,
                currency: Currency.USD,
                country: Country.RU,
                city: 'Орел',
                username: 'admin',
                avatar: 'https://img.freepik.com/free-vector/creative-hacker-logo-template_23-2149199402.jpg?w=2000',
            },
        },
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
        profile: {
            readonly: true,
            form: {
                first: 'Денис',
                lastname: 'Ерохин',
                age: 32,
                currency: Currency.USD,
                country: Country.RU,
                city: 'Орел',
                username: 'admin',
                avatar: 'https://img.freepik.com/free-vector/creative-hacker-logo-template_23-2149199402.jpg?w=2000',
            },
        },
        ui: {
            secondaryColor: '#eee',
        },
    }),
]
