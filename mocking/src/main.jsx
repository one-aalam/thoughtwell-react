import React from 'react'
import ReactDOM from 'react-dom'

import './styles.css'
import App from './App'
import { FollowStatsProvider } from './contexts/FollowStatsContext'

function renderApp() {
    ReactDOM.render(
        <React.StrictMode>
            <FollowStatsProvider>
                <App />
            </FollowStatsProvider>
        </React.StrictMode>,
        document.getElementById('app')
    )
}

if (process.env.NODE_ENV === 'development') {
    import('./mocks/browser').then(async ({ worker }) => {
        await worker.start({ onUnhandledRequest: 'bypass' })
        renderApp()
    })
} else {
    renderApp()
}
