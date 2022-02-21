import renderer from 'react-test-renderer'
import { vi } from 'vitest'
import FollowButton from './FollowButton'

test('FollowButton is rendered', () => {
    const testRenderer = renderer.create(
        <FollowButton user={{ name: 'Amar', handle: 'amar' }} />
    )
    const testRendererJson = testRenderer.toJSON()
    expect(testRendererJson).toBeDefined()
    expect(testRendererJson).not.toBeInstanceOf(Array)
    expect(testRendererJson).toMatchSnapshot()
})

test('FollowButton - renders `follow` when user is followed', () => {
    let testRenderer = renderer.create(
        <FollowButton user={{ name: 'Amar', handle: 'amar' }} />
    )
    expect(testRenderer.root.findByType('button').children[0]).toEqual('follow')
})

test('FollowButton - renders `unfollow` when user is not followed', () => {
    let testRenderer = renderer.create(
        <FollowButton
            user={{ name: 'Amar', handle: 'amar', isFollowed: true }}
        />
    )
    expect(testRenderer.root.findByType('button').children[0]).toEqual(
        'unfollow'
    )
})

test('FollowButton - gets triggered, and emits events with the current state and user payload', () => {
    const onClick = vi.fn(() => {})
    const user = { name: 'Amar', handle: 'amar' }
    let testRenderer = renderer.create(
        <FollowButton user={user} onClick={onClick} />
    )
    expect(testRenderer.root.findByType('button').children[0]).toEqual('follow')

    testRenderer.root.findByType('button').props.onClick()
    expect(testRenderer.root.findByType('button').children[0]).toEqual(
        'unfollow'
    )
    expect(onClick).toHaveBeenCalledTimes(1)
    expect(onClick).toHaveBeenCalledWith(true, user)

    testRenderer.root.findByType('button').props.onClick()
    expect(testRenderer.root.findByType('button').children[0]).toEqual('follow')
    expect(onClick).toHaveBeenCalledTimes(2)
    expect(onClick).toHaveBeenCalledWith(false, user)
})
