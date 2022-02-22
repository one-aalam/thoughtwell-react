import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { default as userEvent } from '@testing-library/user-event'
import { vi } from 'vitest'
import FollowButton from './FollowButton'
import { USERS } from '../mocks/fixtures/users'

describe('FollowButton', () => {
    test('renders FollowButton with correct states/labels', () => {
        render(<FollowButton user={USERS[0]} />)

        const followBtn = screen.getByRole('button')
        expect(followBtn).toBeInTheDocument()
        // expect(followBtn).toHaveTextContent('follow') // not this
        expect(followBtn.innerHTML).toEqual('follow') // but, this!

        userEvent.click(followBtn)
        expect(followBtn.innerHTML).toEqual('unfollow')

        userEvent.click(followBtn)
        expect(followBtn.innerHTML).toEqual('follow')
    })

    test('emits correct payload to onClick listener', () => {
        const onClick = vi.fn()
        const { name, handle, isFollowed } = USERS[0]
        render(
            <FollowButton
                user={{ name, handle, isFollowed }}
                onClick={onClick}
            />
        )

        const followBtn = screen.getByRole('button')

        userEvent.click(followBtn)
        expect(onClick).toHaveBeenCalledTimes(1)
        expect(onClick).toHaveBeenCalledWith(true, {
            name,
            handle,
        })

        userEvent.click(followBtn)
        expect(onClick).toHaveBeenCalledTimes(2)
        expect(onClick).toHaveBeenCalledWith(false, {
            name,
            handle,
        })
    })
})
