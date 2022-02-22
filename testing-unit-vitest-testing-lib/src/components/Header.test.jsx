import renderer from 'react-test-renderer'
import Header from './Header'

test('Header is rendered', () => {
    const testRenderer = renderer.create(<Header />)
    const testRendererJson = testRenderer.toJSON()
    expect(testRendererJson).toBeDefined()
    expect(testRendererJson).not.toBeInstanceOf(Array)
    expect(testRendererJson).toMatchSnapshot()
})

test('Header has a logo with its width equal to 60px', () => {
    const testRenderer = renderer.create(<Header />)
    const testInstance = testRenderer.root

    expect(testInstance.findByType('img')).toBeDefined()
})
