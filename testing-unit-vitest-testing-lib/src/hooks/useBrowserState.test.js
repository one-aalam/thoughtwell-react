import { renderHook, act, cleanup } from '@testing-library/react-hooks'
import useBrowserState from './useBrowserState'
import { USERS } from '../mocks/fixtures/users'

describe('useBrowserState', () => {
    beforeEach(() => {
        localStorage.clear()
    })
    afterEach(cleanup)

    test('initializes with default state as `[]` which can be changed easily', () => {
        let { result } = renderHook(() => useBrowserState())
        let [value] = result.current
        expect(value).toEqual([])
    })

    test('initializes with any provided state like `{}`', () => {
        let { result } = renderHook(() => useBrowserState('state', {}))
        let [value] = result.current
        expect(value).toEqual({})
    })

    test('accepts user provided values like `USERS`, and serializes/de-serializes correctly', () => {
        let { result } = renderHook(() => useBrowserState('state', USERS))
        let [value] = result.current
        expect(value).toEqual(USERS)
    })

    test('lets user update and receive updated values', () => {
        const { result } = renderHook(() => useBrowserState('state', USERS))
        const [state, setState] = result.current
        expect(state).toEqual(USERS)
        act(() => setState(USERS[0]))
        const [latestState] = result.current
        expect(latestState).toEqual(USERS[0])
    })

    test('state getter calls the `localStorage.getItem` method', () => {
        renderHook(() => useBrowserState())
        expect(window.localStorage.getItem).toHaveBeenCalled()
    })

    test('state setter calls the `localStorage.setItem` method with correct key', () => {
        const { result } = renderHook(() => useBrowserState())
        const [_, setState] = result.current
        act(() => setState(USERS[0]))
        expect(window.localStorage.setItem).lastCalledWith(
            `thoughtwell_state`,
            JSON.stringify(USERS[0])
        )
    })
})
