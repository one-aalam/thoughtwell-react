import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import User from './User'
import { USERS } from '../mocks/fixtures/users'

describe('User', () => {
    test('renders user correctly', () => {
        render(<User user={USERS[0]} />)
        expect(screen.queryAllByRole('listitem').length).toEqual(1)

        expect(screen.getByRole('img')).toBeInTheDocument()
        expect(screen.getByRole('img').getAttribute('src')).toEqual(
            `https://avatars.dicebear.com/api/open-peeps/${USERS[0].handle}.svg`
        )

        expect(screen.getByText(USERS[0].name)).toBeInTheDocument()
        expect(screen.getByText(`@${USERS[0].handle}`)).toBeInTheDocument(1)

        expect(screen.getByRole('button')).toBeInTheDocument()
        expect(screen.getByRole('button')).toHaveTextContent('follow')
    })
})
