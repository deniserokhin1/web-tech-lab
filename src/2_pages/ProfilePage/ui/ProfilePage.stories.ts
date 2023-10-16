import type { Meta, StoryObj } from '@storybook/react'
import ProfilePage from './ProfilePage'
import { ThemeDecorator } from '@/6_shared/config/storybook/Decorators/ThemeDecorator'
import { Theme } from '@/1_app/providers/ThemeProvider'
import { StoreDecorator } from '@/6_shared/config/storybook/Decorators/StoreDecorator'
import { Currency } from '@/5_entities/Currency'
import { Country } from '@/5_entities/Country'

const meta = {
    title: '2_pages/ProfilePage',
    component: ProfilePage,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof ProfilePage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}
Light.decorators = [
    StoreDecorator({
        profile: {
            error: undefined,
            form: {
                first: 'Денис',
                lastname: 'Ерохин',
                age: 31,
                currency: Currency.USD,
                country: Country.RU,
                city: 'Орел',
                username: 'admin',
                avatar: 'https://img.freepik.com/free-vector/creative-hacker-logo-template_23-2149199402.jpg?w=2000',
            },
            readonly: true,
        },
    }),
]

export const Dark: Story = {}
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            error: undefined,
            form: {
                first: 'Денис',
                lastname: 'Ерохин',
                age: 31,
                currency: Currency.USD,
                country: Country.RU,
                city: 'Орел',
                username: 'admin',
                avatar: 'https://img.freepik.com/free-vector/creative-hacker-logo-template_23-2149199402.jpg?w=2000',
            },
            readonly: true,
        },
    }),
]
