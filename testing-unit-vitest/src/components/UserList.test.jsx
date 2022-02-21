import renderer, { act } from 'react-test-renderer'
import { USERS } from '../mocks/fixtures/users'
import UserList from './UserList'
import User from '../components/User'

test('UserList is rendered with no records', () => {
    const testRenderer = renderer.create(<UserList />)
    const testInstance = testRenderer.root
    const testRendererJson = testRenderer.toJSON()
    expect(testRendererJson).toBeDefined()
    expect(testRendererJson).not.toBeInstanceOf(Array)
    expect(testRendererJson).toMatchSnapshot()
    expect(testInstance.findByType('p').children[0]).toEqual(
        `couldn\'t find any users.`
    )
})

test('UserList is rendered with correct count of childrens(User)', () => {
    let testRenderer = renderer.create(<UserList users={USERS} />)
    const testInstance = testRenderer.root

    // with multiple
    expect(testInstance.findAllByType(User).length).toEqual(USERS.length)

    // With single
    act(() => {
        testRenderer = testRenderer.update(<UserList users={[USERS[0]]} />)
    })
    expect(testInstance.findAllByType(User).length).toEqual(1)
})

test('UserList is rendered with correct values of childrens(User)', () => {
    let testRenderer = renderer.create(<UserList users={USERS} />)
    const testInstance = testRenderer.root
    // with multiple
    const allUserInstances = testInstance.findAllByType(User)
    expect(allUserInstances[0].props).toEqual({ user: USERS[0] })
    expect(allUserInstances[1].props).toEqual({ user: USERS[1] })
    expect(allUserInstances[2].props).toEqual({ user: USERS[2] })
    // With single
    act(() => {
        testRenderer = testRenderer.update(<UserList users={[USERS[0]]} />)
    })
    expect(testInstance.findAllByType(User)[0].props).toEqual({
        user: USERS[0],
    })
})
