import renderer, { act } from 'react-test-renderer'
import { USERS } from '../mocks/fixtures/users'
import FollowStats from './FollowStats'
import FollowStatsContext from '../contexts/FollowStatsContext'

test('FollowStats is rendered', () => {
    const testRenderer = renderer.create(<FollowStats />)
    const testRendererJson = testRenderer.toJSON()
    expect(testRendererJson).toBeDefined()
    expect(testRendererJson).not.toBeInstanceOf(Array)
    expect(testRendererJson).toMatchSnapshot()
})

test('FollowStats is rendered with default label when no users are followed', () => {
    const testRenderer = renderer.create(
        <FollowStatsContext.Provider value={{ followedUsers: [] }}>
            <FollowStats />
        </FollowStatsContext.Provider>
    )
    expect(testRenderer.root.findByType('strong').children.join('')).toEqual(
        'Following: nobody'
    )
})

test('FollowStats is rendered with correct user count when users are followed', () => {
    let testRenderer = renderer.create(
        <FollowStatsContext.Provider value={{ followedUsers: [USERS[0]] }}>
            <FollowStats />
        </FollowStatsContext.Provider>
    )
    expect(testRenderer.root.findByType('strong').children.join('')).toEqual(
        'Following: 1 person(s)'
    )
    act(() => {
        testRenderer.update(
            <FollowStatsContext.Provider value={{ followedUsers: USERS }}>
                <FollowStats />
            </FollowStatsContext.Provider>
        )
    })
    expect(testRenderer.root.findByType('strong').children.join('')).toEqual(
        'Following: 3 person(s)'
    )
})
