import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '1_app/providers/ThemeProvider'
import { ThemeDecorator } from '6_shared/config/storybook/Decorators/ThemeDecorator'
import ForbiddenPage from './ForbiddenPage'
import { StoreDecorator } from '6_shared/config/storybook/Decorators/StoreDecorator'

const meta = {
    title: '2_pages/ForbiddenPage',
    component: ForbiddenPage,
    parameters: {
        layout: 'fullscreen',
    },
    args: {},
} satisfies Meta<typeof ForbiddenPage>

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
