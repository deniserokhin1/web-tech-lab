import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/1_app/providers/ThemeProvider'
import { ThemeDecorator } from '@/6_shared/config/storybook/Decorators/ThemeDecorator'
import AddCommentForm from './AddCommentForm'
import { StoreDecorator } from '@/6_shared/config/storybook/Decorators/StoreDecorator'
import { action } from '@storybook/addon-actions'

const meta = {
    title: '4_features/AddCommentForm',
    component: AddCommentForm,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof AddCommentForm>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {
        onSendComment: action('onSendComment'),
    },
}
Light.decorators = [
    StoreDecorator({
        addCommentForm: {
            text: '',
        },
    }),
]

export const Dark: Story = {
    args: {
        onSendComment: action('onSendComment'),
    },
}
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        addCommentForm: {
            text: '',
        },
    }),
]
