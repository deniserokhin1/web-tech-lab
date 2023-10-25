import { fireEvent, screen } from '@testing-library/react'

import { componentRender } from '@/6_shared/lib/tests/componentRender'

import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
    test('render component', () => {
        componentRender(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('toggle sidebar', () => {
        componentRender(<Sidebar />)
        const toggleButton = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleButton)
        expect(screen.getByTestId('sidebar').classList.contains('open')).toBe(true)
        fireEvent.click(toggleButton)
        expect(screen.getByTestId('sidebar').classList.contains('open')).toBe(false)
        screen.debug()
    })
})
