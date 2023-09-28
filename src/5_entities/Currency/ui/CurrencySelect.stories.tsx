import type { Meta, StoryObj } from '@storybook/react'
import { CurrencySelect } from './CurrencySelect'
import { ThemeDecorator } from '6_shared/config/storybook/Decorators/ThemeDecorator'
import { Theme } from '1_app/providers/ThemeProvider'

const meta = {
    title: '5_entities/CurrencySelect',
    component: CurrencySelect,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        widthFitContent: true,
    },
} satisfies Meta<typeof CurrencySelect>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}

export const Dark: Story = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
