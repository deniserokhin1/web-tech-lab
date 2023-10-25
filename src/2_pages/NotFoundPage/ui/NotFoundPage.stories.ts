import type { Meta, StoryObj } from '@storybook/react'

import { Theme } from '@/1_app/providers/ThemeProvider'
import { ThemeDecorator } from '@/6_shared/config/storybook/Decorators/ThemeDecorator'

import { NotFoundPage } from './NotFoundPage'

const meta = {
    title: '2_pages/NotFoundPage',
    component: NotFoundPage,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        isDev: true,
    },
} satisfies Meta<typeof NotFoundPage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}

export const Dark: Story = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
