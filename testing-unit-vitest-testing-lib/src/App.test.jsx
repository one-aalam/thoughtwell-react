import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import { afterEach, expect, vi } from 'vitest'
import App from './App'
import { $fetch } from 'ohmyfetch'
import { USERS } from './mocks/fixtures/users'

vi.mock('ohmyfetch', () => {
    return {
        $fetch: vi.fn(() => {
            return new Promise((resolve) => {
                resolve(USERS)
            })
        }),
    }
})

let container

beforeAll(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
})

afterAll(() => {
    document.body.removeChild(container)
    container = null
})

test('App is rendered with the right data set', async () => {
    await act(async () => {
        ReactDOM.render(<App />, container)
    })

    // API assertions
    expect($fetch).toHaveBeenCalled()
    expect($fetch).toHaveBeenCalledOnce()
    expect($fetch).toHaveBeenCalledWith(
        `${import.meta.env.VITE_API_URL}/api/people`
    )
    expect($fetch).toHaveReturnedWith(USERS)

    // DOM Assertions....
    expect(container.querySelectorAll('.header').length).toEqual(1)
    expect(container.querySelectorAll('.loader').length).toEqual(0)
    expect(container.querySelectorAll('.user-cell').length).toEqual(3)
})

// test('App is rendered with the default mark-up and loading state by default', async () => {
//     await act(async () => {
//         ReactDOM.render(<App />, container)
//     })
//     // DOM Assertions....
//     expect(container.querySelectorAll('.header').length).toEqual(1)
//     expect(container.querySelectorAll('.loader').length).toEqual(1)
//     expect(container.querySelector('.loader').textContent).toEqual(
//         'loading user recommendations...'
//     )
//     expect(container.querySelectorAll('.user-list').length).toEqual(0)
// })
