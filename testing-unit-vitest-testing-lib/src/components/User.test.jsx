import renderer from 'react-test-renderer'
import { vi } from 'vitest'
import FollowStatsContext from '../contexts/FollowStatsContext'
import { USERS } from '../mocks/fixtures/users'
import User from './User'

test('User is rendered', () => {
    const testRenderer = renderer.create(<User user={USERS[0]} />)
    const testRendererJson = testRenderer.toJSON()
    expect(testRendererJson).toBeDefined()
    expect(testRendererJson).not.toBeInstanceOf(Array)
    expect(testRendererJson).toMatchSnapshot()
})

test('User is rendered with the correct user properties', () => {
    const testRenderer = renderer.create(
        <FollowStatsContext.Provider
            value={{ followedUsers: [], handleFollowAction: vi.fn(() => {}) }}
        >
            <User user={USERS[0]} />
        </FollowStatsContext.Provider>
    )
    expect(testRenderer.root.findByType('img').props.src).toEqual(
        `https://avatars.dicebear.com/api/open-peeps/${USERS[0].handle}.svg`
    )
    expect(testRenderer.root.findByType('img').props.alt).toEqual(USERS[0].name)
    expect(testRenderer.root.findByType('h3').children).toEqual([USERS[0].name])
    expect(testRenderer.root.findByType('h6').children).toEqual([
        `@${USERS[0].handle}`,
    ])
})
