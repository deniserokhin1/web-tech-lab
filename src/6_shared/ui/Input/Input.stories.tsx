import type { Meta, StoryObj } from '@storybook/react'

import { Theme } from '@/1_app/providers/ThemeProvider'
import { ThemeDecorator } from '@/6_shared/config/storybook/Decorators/ThemeDecorator'

import { Input } from './Input'

const meta = {
    title: '6_shared/Input',
    component: Input,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        autoFocus: true,
        placeholder: 'Text',
        noBorder: true,
    },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}

export const Dark: Story = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
