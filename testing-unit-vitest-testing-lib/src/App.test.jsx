import '@testing-library/jest-dom'
import { afterEach, expect, vi } from 'vitest'
import { render, screen, cleanup, waitFor } from '@testing-library/react'
import { $fetch } from 'ohmyfetch'
import { USERS } from './mocks/fixtures/users'
import { FollowStatsProvider } from './contexts/FollowStatsContext'
import App from './App'

vi.mock('ohmyfetch', () => {
    return {
        $fetch: vi.fn(() => {
            return new Promise((resolve) => {
                resolve(USERS)
            })
        }),
    }
})

afterEach(cleanup)

describe('App', () => {
    test('should render correctly', async () => {
        render(
            <FollowStatsProvider>
                <App />
            </FollowStatsProvider>
        )

        // this should be enough, as the header is pretty much a static component, and is already tested independently by now
        expect(screen.getByRole('banner')).toBeInTheDocument()

        // this checks for presence of `UserSearchForm` recognized by the role -> 'form', but we're yet to search if it plays well with the UserList component
        expect(screen.getByRole('form')).toBeInTheDocument()

        // see the initial state is there...
        expect(
            screen.getByText('loading user recommendations...')
        ).toBeInTheDocument()

        // to disappear
        await waitFor(() => screen.getByRole('list'))
        // and replaced by `UserList` currently recognized by the role -> 'list'
        expect(
            screen.queryByText('loading user recommendations...')
        ).toBeDefined()
        expect(screen.queryAllByRole('listitem').length).toEqual(USERS.length)
        USERS.map((user) => {
            expect(screen.getByText(user.name)).toBeInTheDocument()
        })

        // API assertions
        expect($fetch).toHaveBeenCalled()
        expect($fetch).toHaveBeenCalledOnce()
        expect($fetch).toHaveBeenCalledWith(
            `${import.meta.env.VITE_API_URL}/api/people`
        )
        expect($fetch).toHaveReturnedWith(USERS)
    })

    test('should let user search user list', () => {
        /** Add assertions */
    })
})
