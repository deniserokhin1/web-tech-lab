/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react'
import { Flex } from './Flex'

const meta = {
    title: '6_shared/Flex',
    component: Flex,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        children: (
            <>
                <div>First</div>
                <div>Seconds</div>
                <div>Third</div>
                <div>Fourth</div>
            </>
        ),
    },
} satisfies Meta<typeof Flex>

export default meta
type Story = StoryObj<typeof meta>

export const Row: Story = {
    args: {
        gap: '32',
        direction: 'row',
    },
}

export const Column: Story = {
    args: {
        direction: 'column',
        gap: '32',
    },
}
