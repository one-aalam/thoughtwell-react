import '@testing-library/jest-dom'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { default as userEvent } from '@testing-library/user-event'

import { vi } from 'vitest'
import UserSearchForm from './UserSearchForm'

afterEach(cleanup)

describe('UserSearchForm', () => {
    test('renders UserSearchForm component (with focus)', () => {
        render(<UserSearchForm />)

        expect(screen.getByRole('form')).toBeInTheDocument()
        expect(screen.getByLabelText('Search')).toBeInTheDocument()
        expect(screen.getByLabelText('Search').value).toBe('')
        expect(screen.getByLabelText('Search')).toHaveFocus()
    })

    test('reflects the values provided by the user', () => {
        render(<UserSearchForm />)

        userEvent.type(screen.getByLabelText('Search'), 'typed in this...')
        expect(screen.getByLabelText('Search').value).toEqual(
            'typed in this...'
        )
    })

    test('submits with empty value w/o any user provided input', () => {
        const onSearch = vi.fn()
        render(<UserSearchForm onSearch={onSearch} />)

        fireEvent.submit(screen.getByRole('form'))
        expect(onSearch).toHaveBeenCalled()
        expect(onSearch).toHaveBeenCalledWith('')
    })

    test('submits with provided value when user provides input', () => {
        const onSearch = vi.fn()
        render(<UserSearchForm onSearch={onSearch} />)

        userEvent.type(screen.getByLabelText('Search'), 'typed in this...')
        fireEvent.submit(screen.getByRole('form'))
        expect(onSearch).toHaveBeenCalled()
        expect(onSearch).toHaveBeenCalledWith('typed in this...')
    })
})
