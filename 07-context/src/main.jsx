import React from 'react'
import ReactDOM from 'react-dom'

import './styles.css'
import App from './App'
import { FollowStatsProvider } from './contexts/FollowStatsContext'


ReactDOM.render(
    <React.StrictMode>
        <FollowStatsProvider>
            <App />
        </FollowStatsProvider>
    </React.StrictMode>,
    document.getElementById('app')
);
