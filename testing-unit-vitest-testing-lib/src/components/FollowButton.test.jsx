import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import FollowButton from './FollowButton'
import { USERS } from '../mocks/fixtures/users'

describe('FollowButton', () => {
    test('renders FollowButton with correct states', () => {
        render(<FollowButton user={USERS[0]} />)

        expect(screen.getByRole('button')).toBeInTheDocument()
        expect(screen.getByRole('button')).toHaveTextContent('follow')
    })
})
