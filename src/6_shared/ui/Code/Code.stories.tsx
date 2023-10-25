import type { Meta, StoryObj } from '@storybook/react'

import { Theme } from '@/1_app/providers/ThemeProvider'
import { ThemeDecorator } from '@/6_shared/config/storybook/Decorators/ThemeDecorator'

import { Code } from './Code'

const meta = {
    title: '6_shared/Code',
    component: Code,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        text:
            'export default {\n' +
            "    title: 'shared/Code',\n" +
            '    component: Code,\n' +
            '    argTypes: {\n' +
            "        backgroundColor: { control: 'color' },\n" +
            '    },\n' +
            '} as ComponentMeta<typeof Code>;\n' +
            '\n' +
            'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n' +
            '\n' +
            'export const Normal = Template.bind({});',
    },
} satisfies Meta<typeof Code>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
}

export const Dark: Story = {
    args: {},
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
