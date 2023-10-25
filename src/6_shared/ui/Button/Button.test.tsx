import { render, screen } from '@testing-library/react'

import { Button, ButtonTheme } from './Button'

describe('Button', () => {
    test('render component', () => {
        render(<Button children="Test" />)
        expect(screen.getByText('Test')).toBeInTheDocument()
    })

    test('render component with theme', () => {
        render(<Button children="Test" theme={ButtonTheme.OUTLINE} />)
        expect(screen.getByText('Test')).toHaveClass('outline')
        screen.debug()
    })
})
