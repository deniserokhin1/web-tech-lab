import type { Meta, StoryObj } from '@storybook/react'
import { ListBox } from './ListBox'
import { Theme } from '1_app/providers/ThemeProvider'
import { ThemeDecorator } from '6_shared/config/storybook/Decorators/ThemeDecorator'

const meta = {
    title: '6_shared/ListBox',
    component: ListBox,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof ListBox>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
}

export const Dark: Story = {
    args: {},
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
