import type { Meta, StoryObj } from '@storybook/react'
import { Navbar } from './Navbar'
import { Theme } from '1_app/providers/ThemeProvider'
import { ThemeDecorator } from '6_shared/config/storybook/Decorators/ThemeDecorator'

const meta = {
    title: '3_widgets/NavBar',
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

export const Dark: Story = {
    args: {},
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
