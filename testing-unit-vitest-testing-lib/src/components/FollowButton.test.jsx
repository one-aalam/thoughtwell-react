import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
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

        fireEvent.click(followBtn)
        expect(followBtn.innerHTML).toEqual('unfollow')

        fireEvent.click(followBtn)
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

        fireEvent.click(followBtn)
        expect(onClick).toHaveBeenCalledTimes(1)
        expect(onClick).toHaveBeenCalledWith(true, {
            name,
            handle,
        })

        fireEvent.click(followBtn)
        expect(onClick).toHaveBeenCalledTimes(2)
        expect(onClick).toHaveBeenCalledWith(false, {
            name,
            handle,
        })
    })
})
