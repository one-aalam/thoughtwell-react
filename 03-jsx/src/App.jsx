import React from 'react'
import Header from './elements/Header'
import UserList from './elements/UserList'

const USERS = [
    { name: 'Amar', handle: 'amar', isFollowed: false },
    { name: 'Akbar', handle: 'akbar', isFollowed: true },
    { name: 'Anthony', handle: 'anthony', isFollowed: false }
]

const UserListTitle = () =>
    <React.Fragment>
        Wanna be <strong>friends</strong> with?
        <br/>
        <small style={{fontSize: '0.8rem', textTransform: 'lowercase'}}><em>thoughtwell reccommends the following folks...</em></small>
    </React.Fragment>

const App = () => (
    <div className="container">
        <Header/>
        <UserList users={USERS}><UserListTitle/></UserList>
    </div>
)

export default App
