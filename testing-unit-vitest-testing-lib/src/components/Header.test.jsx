import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
    test('renders Header component', () => {
        render(<Header />)

        expect(screen.getByRole('img')).toBeInTheDocument()
        expect(screen.getByRole('img').getAttribute('width')).toEqual(`60`)

        expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
            'thoughtwell'
        )

        expect(
            screen.getByText(`where people connnect on what they're up to...`)
        ).toBeInTheDocument()
    })
})
