import { vi } from 'vitest'
import { server } from './mocks/server'

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

const createLocalStorage = () => {
    // Create a object, as the default store, as that's how the browser's storage works
    let state = {}

    const localStorageMock = {
        getItem: vi.fn((x) =>
            typeof state[x] == 'undefined' ? null : state[x]
        ),
        setItem: vi.fn((x, v) => (state[x] = v)),
        removeItem: vi.fn((x, v) => delete state[x]),
        clear: vi.fn(() => (state = {})),
    }

    Object.defineProperty(window, 'localStorage', {
        value: localStorageMock,
    })
}

beforeEach(() => {
    createLocalStorage()
})
