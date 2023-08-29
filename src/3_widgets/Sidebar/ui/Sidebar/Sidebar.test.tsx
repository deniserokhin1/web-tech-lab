import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { renderWithTranslation } from '6_shared/lib/tests/renderWithTranslation'

describe('Sidebar', () => {
    test('render component', () => {
        renderWithTranslation(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('toggle sidebar', () => {
        renderWithTranslation(<Sidebar />)
        const toggleButton = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleButton)
        expect(screen.getByTestId('sidebar').classList.contains('open')).toBe(false)
        fireEvent.click(toggleButton)
        expect(screen.getByTestId('sidebar').classList.contains('open')).toBe(true)
        screen.debug()
    })
})

