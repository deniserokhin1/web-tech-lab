import type { Meta, StoryObj } from '@storybook/react'

import { Theme } from '@/1_app/providers/ThemeProvider'
import { StoreDecorator } from '@/6_shared/config/storybook/Decorators/StoreDecorator'
import { ThemeDecorator } from '@/6_shared/config/storybook/Decorators/ThemeDecorator'

import { Navbar } from './Navbar'

const meta = {
    title: '3_widgets/Navbar',
    component: Navbar,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof Navbar>

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
