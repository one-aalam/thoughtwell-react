import renderer from 'react-test-renderer'
import { vi } from 'vitest'
import UserSearchForm from './UserSearchForm'

test('UserSearchForm is rendered', () => {
    const testRenderer = renderer.create(<UserSearchForm />)
    const testRendererJson = testRenderer.toJSON()
    expect(testRendererJson).toBeDefined()
    expect(testRendererJson).not.toBeInstanceOf(Array)
    expect(testRendererJson).toMatchSnapshot()
})

test('UserSearchForm triggeres search with provided values on change', () => {
    const onSearch = vi.fn(() => {})
    const testRenderer = renderer.create(<UserSearchForm onSearch={onSearch} />)
    const testInstance = testRenderer.root

    testInstance
        .findByType('input')
        .props.onChange({ target: { value: 'test' } })
    expect(onSearch).toHaveBeenCalled()
    expect(onSearch).toHaveBeenCalledTimes(1)
    expect(onSearch).toHaveBeenCalledWith('test')
})

test('UserSearchForm triggeres search with provided values on submit', () => {
    const onSearch = vi.fn(() => {})
    let event = {
        preventDefault: vi.fn(),
        target: {
            value: 'test',
        },
    }
    const testRenderer = renderer.create(
        <UserSearchForm onSearch={onSearch} />,
        {
            createNodeMock: (element) => {
                if (element.type === 'input') {
                    // mock a focus function
                    return {
                        focus: () => {
                            // do something...
                        },
                    }
                }
                return null
            },
        }
    )
    const testInstance = testRenderer.root

    testInstance.findByType('form').props.onSubmit(event)
    expect(event.preventDefault).toHaveBeenCalled()
    expect(onSearch).toHaveBeenCalled()
    expect(onSearch).toHaveBeenCalledTimes(1)
    expect(onSearch).toHaveBeenCalledWith('')

    testInstance.findByType('input').props.onChange(event)
    expect(onSearch).toHaveBeenCalledTimes(2)
    expect(onSearch).toHaveBeenCalledWith('test')

    testInstance.findByType('form').props.onSubmit(event)
    expect(onSearch).toHaveBeenCalledTimes(3)
    expect(onSearch).toHaveBeenCalledWith('test')
})
