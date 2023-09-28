import type { Meta, StoryObj } from '@storybook/react'
import { ProfileCard } from './ProfileCard'
import { ThemeDecorator } from '6_shared/config/storybook/Decorators/ThemeDecorator'
import { Theme } from '1_app/providers/ThemeProvider'
import { Currency } from '5_entities/Currency'
import { Country } from '5_entities/Country'

const meta = {
    title: '5_entities/ProfileCard',
    component: ProfileCard,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        data: {
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
} satisfies Meta<typeof ProfileCard>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
}

export const Light_Is_Loading: Story = {
    args: {
        isLoading: true,
    },
}

export const Light_Error: Story = {
    args: {
        error: 'Некорректные данные',
    },
}

export const Dark: Story = {
    args: {},
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]