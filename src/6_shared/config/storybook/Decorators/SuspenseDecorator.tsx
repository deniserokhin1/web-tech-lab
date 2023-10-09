import { type Decorator } from '@storybook/react'
import { Suspense } from 'react'

export const SuspenseDecorator: Decorator = (StoryComponent) => (
    <Suspense>
        <StoryComponent />
    </Suspense>
)
