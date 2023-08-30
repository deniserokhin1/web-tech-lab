import type { Meta, StoryObj } from '@storybook/react'
import { PageError } from './PageError'

const meta = {
    title: '3_widgets/PageError',
    component: PageError,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        isDev: true,
    },
} satisfies Meta<typeof PageError>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
}
