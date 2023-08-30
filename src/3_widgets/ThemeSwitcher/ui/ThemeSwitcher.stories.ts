import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '1_app/providers/ThemeProvider'
import { ThemeSwitcher } from './ThemeSwitcher'
import { ThemeDecorator } from '6_shared/config/storybook/Decorators/ThemeDecorator'

const meta = {
    title: '3_widgets/ThemeSwitcher',
    component: ThemeSwitcher,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof ThemeSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {
        mainColor: '#ebebef',
    },
}
Light.decorators = [ThemeDecorator(Theme.DARK)]

export const Dark: Story = {
    args: {
        mainColor: '#1e325c',
    },
}
