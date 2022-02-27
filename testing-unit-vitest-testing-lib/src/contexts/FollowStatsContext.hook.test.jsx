import '@testing-library/jest-dom'
import { renderHook, act, cleanup } from '@testing-library/react-hooks'
import FollowStatsContext, {
    FollowStatsProvider,
    useFollowStats,
} from './FollowStatsContext'
import { USERS } from '../mocks/fixtures/users'

afterEach(cleanup)

describe('FollowStatsContext', () => {
    test('should throw error without context values, or `FollowStatsContext.Provider`', () => {
        let { result } = renderHook(() => useFollowStats(), {
            wrapper: ({ children }) => (
                <FollowStatsContext.Provider value={undefined}>
                    {children}
                </FollowStatsContext.Provider>
            ),
        })
        expect(result.error).toEqual(
            Error(`useFollowStats must be used within a FollowStatsProvider`)
        )
    })

    test('should have default value and updater function when not used with provider', () => {
        const { result } = renderHook(() => useFollowStats())
        expect(result.current.followedUsers).toBeDefined()
        expect(result.current.handleFollowAction).toBeDefined()
    })

    test('should have default value and updater function when used with provider', () => {
        const { result } = renderHook(() => useFollowStats(), {
            wrapper: ({ children }) => (
                <FollowStatsProvider>{children}</FollowStatsProvider>
            ),
        })
        expect(result.current.followedUsers).toBeDefined()
        expect(result.current.handleFollowAction).toBeDefined()
    })

    test('should let the value be overriden when used with `FollowStatsContext.Provider`', () => {
        const { result } = renderHook(() => useFollowStats(), {
            wrapper: ({ children }) => (
                <FollowStatsContext.Provider value={{ followedUsers: USERS }}>
                    {children}
                </FollowStatsContext.Provider>
            ),
        })
        expect(result.current.followedUsers).toBe(USERS)
    })

    test('should let the context values be updated and reflected correctly', () => {
        const { result } = renderHook(() => useFollowStats(), {
            wrapper: ({ children }) => (
                <FollowStatsProvider>{children}</FollowStatsProvider>
            ),
        })
        expect(result.current.followedUsers).toBeDefined()
        expect(result.current.followedUsers).toEqual([])

        act(() => {
            result.current.handleFollowAction(true, USERS[0])
        })
        expect(result.current.followedUsers.length).toEqual(1)
        expect(result.current.followedUsers).toEqual([USERS[0]])

        act(() => {
            result.current.handleFollowAction(false, USERS[0])
        })
        expect(result.current.followedUsers.length).toEqual(0)
    })
})
