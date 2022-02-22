import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { USERS } from '../mocks/fixtures/users'
import FollowStats from './FollowStats'
import FollowStatsContext from '../contexts/FollowStatsContext'

describe('FollowStats', () => {
    test('renders the default label when no users are followed', () => {
        render(
            <FollowStatsContext.Provider value={{ followedUsers: [] }}>
                <FollowStats />
            </FollowStatsContext.Provider>
        )
        expect(screen.getByTestId('follow-stats')).toHaveTextContent(
            'Following: nobody'
        )
    })

    test('renders the correct user count when users are followed', () => {
        const { rerender } = render(
            <FollowStatsContext.Provider value={{ followedUsers: [USERS[0]] }}>
                <FollowStats />
            </FollowStatsContext.Provider>
        )
        expect(screen.getByTestId('follow-stats')).toHaveTextContent(
            'Following: 1 person(s)'
        )
        rerender(
            <FollowStatsContext.Provider value={{ followedUsers: USERS }}>
                <FollowStats />
            </FollowStatsContext.Provider>
        )
        expect(screen.getByTestId('follow-stats')).toHaveTextContent(
            'Following: 3 person(s)'
        )
    })

    test('applies the followed/non-followed styles correctly', () => {
        const { rerender } = render(
            <FollowStatsContext.Provider value={{ followedUsers: [] }}>
                <FollowStats />
            </FollowStatsContext.Provider>
        )
        expect(screen.getByTestId('follow-stats')).not.toHaveClass(
            'follow-stats--followed'
        )

        rerender(
            <FollowStatsContext.Provider value={{ followedUsers: USERS }}>
                <FollowStats />
            </FollowStatsContext.Provider>
        )
        expect(screen.getByTestId('follow-stats')).toHaveClass(
            'follow-stats--followed'
        )
    })
})
