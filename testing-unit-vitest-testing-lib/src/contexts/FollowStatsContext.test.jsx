import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FollowStatsContext, {
    FollowStatsProvider,
    useFollowStats,
} from './FollowStatsContext'
import { USERS } from '../mocks/fixtures/users'

const FollowStats = () => {
    const { followedUsers } = useFollowStats()
    return <>Followed: {followedUsers.length}</>
}

const FollowableUserButton = ({ user }) => {
    const { followedUsers, handleFollowAction } = useFollowStats()
    const isFollowed = followedUsers.find(
        (_user) => _user.handle === user.handle
    )
    return (
        <button onClick={() => handleFollowAction(!isFollowed, user)}>
            {user.name}
        </button>
    )
}

describe('FollowStatsContext', () => {
    test('should let component consider the default follow count as 0 when used without provider', () => {
        render(<FollowStats />)
        expect(screen.getByText(/Followed/i)).toHaveTextContent(`Followed: 0`)
    })

    test('should let component consider the default follow count as 0 when used with provider', () => {
        render(
            <FollowStatsProvider>
                <FollowStats />
            </FollowStatsProvider>
        )
        expect(screen.getByText(/Followed/i)).toHaveTextContent(`Followed: 0`)
    })

    test('should let component(s) consume the correct provided value overrides', () => {
        render(
            <FollowStatsContext.Provider value={{ followedUsers: USERS }}>
                <FollowStats />
            </FollowStatsContext.Provider>
        )
        expect(screen.getByText(/Followed/i)).toHaveTextContent(
            `Followed: ${USERS.length}`
        )
    })

    test('should let disconnected component(s) use and update the follow list correctly', () => {
        render(
            <FollowStatsProvider>
                <span>
                    <FollowStats />
                </span>
                <FollowableUserButton user={USERS[0]} />
            </FollowStatsProvider>
        )
        expect(screen.getByText(/Followed/i)).toHaveTextContent(`Followed: 0`)

        userEvent.click(screen.getByText(new RegExp(USERS[0].name)))
        expect(screen.getByText(/Followed/i)).toHaveTextContent(`Followed: 1`)

        userEvent.click(screen.getByText(new RegExp(USERS[0].name)))
        expect(screen.getByText(/Followed/i)).toHaveTextContent(`Followed: 0`)
    })
})
