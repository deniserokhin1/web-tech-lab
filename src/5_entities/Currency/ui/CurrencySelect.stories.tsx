import { Theme } from '1_app/providers/ThemeProvider'
import { StoreDecorator } from '6_shared/config/storybook/Decorators/StoreDecorator'
import { ThemeDecorator } from '6_shared/config/storybook/Decorators/ThemeDecorator'
import type { Meta, StoryObj } from '@storybook/react'
import { Currency } from '../model/types/currency'
import { CurrencySelect } from './CurrencySelect'

const meta = {
    title: '5_entities/CurrencySelect',
    component: CurrencySelect,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        widthFitContent: true,
        value: Currency.EUR,
    },
} satisfies Meta<typeof CurrencySelect>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}
Light.decorators = [
    StoreDecorator({
        ui: {
            secondaryColor: '#1c58d9',
        },
    }),
]

export const Dark: Story = {}
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        ui: {
            secondaryColor: '#eee',
        },
    }),
]
