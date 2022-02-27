import { Component } from 'react'

class ErrorBoundary extends Component {
    state = { hasError: false }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        console.error('ErrorBoundary caught an error', error, info)
    }

    render() {
        if (this.state.hasError) {
            return (
                <h2>
                    I met with an error. Ideally this shouldn't happen but since
                    this has happened, here's what you could do
                    <ul>
                        <li>Check the services this App depends upon</li>
                        <li>Check your App's code</li>
                    </ul>
                </h2>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary
