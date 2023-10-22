module.exports = (layer, componentName) => `import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/1_app/providers/ThemeProvider'
import { ThemeDecorator } from '@/6_shared/config/storybook/Decorators/ThemeDecorator'
import { ${componentName} } from './${componentName}'

const meta = {
    title: '${layer}/${componentName}',
    component: ${componentName},
    parameters: {
        layout: 'fullscreen',
    },
    args: {},
} satisfies Meta<typeof ${componentName}>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
}

export const Dark: Story = {
    args: {},
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
`
