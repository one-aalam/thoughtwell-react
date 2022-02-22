import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import UserList from './UserList'
import { USERS } from '../mocks/fixtures/users'

describe('UserList', () => {
    test('renders empty state correctly', () => {
        const { rerender } = render(<UserList />)
        expect(screen.getByText(`couldn't find any users.`)).toBeInTheDocument()

        rerender(<UserList users={USERS} />)
        expect(screen.queryByText(`couldn't find any users.`)).toBeNull()
    })

    test('renders user list heading correctly', () => {
        const { rerender } = render(<UserList />)
        expect(screen.queryAllByRole('heading', { level: 4 }).length).toEqual(1)
        expect(
            screen.queryByRole('heading', { level: 4 })
        ).toBeEmptyDOMElement()

        rerender(
            <UserList>
                Wanna be <strong>friends</strong> with?
            </UserList>
        )
        expect(screen.queryByRole('heading', { level: 4 })).toHaveTextContent(
            'Wanna be friends with?'
        )
    })

    test.skip('renders user list correctly', () => {
        // Since we're using react-testing-lib, this is not the reccommended way...
        // though, container is provided, try not to rely on it as much as possible
        const { container, rerender } = render(<UserList />)
        expect(container.getElementsByClassName('.user-cell').length).toEqual(0)

        rerender(<UserList users={USERS} />)
        expect(container.getElementsByClassName('.user-cell').length).toEqual(3)
    })

    test('renders user list correctly', () => {
        const { rerender } = render(<UserList />)
        expect(screen.queryAllByRole('list').length).toEqual(1)
        expect(screen.queryAllByRole('listitem').length).toEqual(0)

        rerender(<UserList users={USERS} />)
        expect(screen.queryAllByRole('list').length).toEqual(1)
        expect(screen.queryAllByRole('listitem').length).toEqual(3)
        expect(screen.queryAllByRole('button').length).toEqual(3)

        expect(screen.queryAllByText(/Amar/i).length).toEqual(2) // name and handler
        expect(screen.queryAllByText(/Follow/i).length).toEqual(3)

        expect(screen.queryAllByText(USERS[0].name).length).toEqual(1)
        expect(screen.queryAllByText(`@${USERS[0].handle}`).length).toEqual(1)

        expect(screen.queryAllByText(USERS[1].name).length).toEqual(1)
        expect(screen.queryAllByText(`@${USERS[1].handle}`).length).toEqual(1)
    })
})
