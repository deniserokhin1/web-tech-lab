import type { Meta, StoryObj } from '@storybook/react'

import { Theme } from '@/1_app/providers/ThemeProvider'
import { ThemeDecorator } from '@/6_shared/config/storybook/Decorators/ThemeDecorator'

import { ArticleProjectDetails } from './ArticleProjectDetails'

const meta = {
    title: '/ArticleProjectDetails',
    component: ArticleProjectDetails,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        article: {
            data: [],
            id: '',
            img: '',
            title: '',
        },
    },
} satisfies Meta<typeof ArticleProjectDetails>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}

export const Dark: Story = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
