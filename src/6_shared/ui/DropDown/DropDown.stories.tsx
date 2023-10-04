import type { Meta, StoryObj } from '@storybook/react'
import { Dropdown } from './DropDown'
import { Theme } from '1_app/providers/ThemeProvider'
import { ThemeDecorator } from '6_shared/config/storybook/Decorators/ThemeDecorator'
import { Button } from '../Button'
import { ButtonTheme } from '../Button/Button'

const meta = {
    title: '6_shared/Dropdown',
    component: Dropdown,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        trigger: <Button theme={ButtonTheme.OUTLINE}>{'Open'}</Button>,
        items: [
            {
                content: 'First',
            },
            {
                content: 'Second',
            },
            {
                content: 'Third',
            },
        ],
    },
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}

export const Dark: Story = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
