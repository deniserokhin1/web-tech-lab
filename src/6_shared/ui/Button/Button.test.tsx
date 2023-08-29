import { Button, ButtonTheme } from './Button'
import { render, screen } from '@testing-library/react'

describe('Button', () => {
    test('render component', () => {
        render(<Button children="Test" />)
        expect(screen.getByText('Test')).toBeInTheDocument()
    })

    test('render component with theme', () => {
        render(<Button children="Test" theme={ButtonTheme.OUTLINE} />)
        expect(screen.getByText('Test')).toHaveClass('border')
        screen.debug()
    })
})
