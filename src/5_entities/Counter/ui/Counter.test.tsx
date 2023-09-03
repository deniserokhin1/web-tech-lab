import { fireEvent, screen } from '@testing-library/react'
import { componentRender } from '6_shared/lib/tests/componentRender'
import { Counter } from './Counter'

describe('Counter', () => {
    test('render component', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 10,
                },
            },
        })
        expect(screen.getByTestId('value-title')).toHaveTextContent('10')
    })

    test('increment', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 10,
                },
            },
        })
        const button = screen.getByTestId('increment-btn')
        fireEvent.click(button)
        expect(screen.getByTestId('value-title')).toHaveTextContent('11')
    })

    test('decrement', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 10,
                },
            },
        })
        const button = screen.getByTestId('decrement-btn')
        fireEvent.click(button)
        expect(screen.getByTestId('value-title')).toHaveTextContent('9')
    })

    test('double decrement', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 10,
                },
            },
        })
        const button = screen.getByTestId('decrement-btn')
        fireEvent.click(button)
        fireEvent.click(button)
        expect(screen.getByTestId('value-title')).toHaveTextContent('8')
    })
})
