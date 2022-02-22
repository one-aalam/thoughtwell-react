import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import User from './User'
import { USERS } from '../mocks/fixtures/users'
import FollowStatsContext from '../contexts/FollowStatsContext'

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

    test('is able to communicate user status change', () => {
        const followUnfollowFunc = vi.fn(() => {})
        const { name, handle } = USERS[0]
        render(
            <FollowStatsContext.Provider
                value={{
                    followedUsers: [],
                    handleFollowAction: followUnfollowFunc,
                }}
            >
                <User user={{ name, handle, isFollowed: false }} />
            </FollowStatsContext.Provider>
        )

        fireEvent.click(screen.getByRole('button'))
        expect(followUnfollowFunc).toHaveBeenCalledTimes(1)
        expect(followUnfollowFunc).toHaveBeenCalledWith(true, {
            name,
            handle,
        })
    })
})
