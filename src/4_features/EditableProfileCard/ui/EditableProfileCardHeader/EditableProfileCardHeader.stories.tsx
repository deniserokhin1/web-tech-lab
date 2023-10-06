import type { Meta, StoryObj } from '@storybook/react'
import { EditableProfileCardHeader } from './EditableProfileCardHeader'
import { Theme } from '1_app/providers/ThemeProvider'
import { ThemeDecorator } from '6_shared/config/storybook/Decorators/ThemeDecorator'
import { StoreDecorator } from '6_shared/config/storybook/Decorators/StoreDecorator'

const meta = {
    title: '4_features/EditableProfileCardHeader',
    component: EditableProfileCardHeader,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof EditableProfileCardHeader>

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
