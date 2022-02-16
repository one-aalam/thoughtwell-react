import React, { useState } from 'react'
import Header from './components/Header'
import UserList from './components/UserList'

const USERS = [
    { name: 'Amar', handle: 'amar', isFollowed: false },
    { name: 'Akbar', handle: 'akbar', isFollowed: false },
    { name: 'Anthony', handle: 'anthony', isFollowed: false }
]

const UserListTitle = () =>
    <React.Fragment>
        Wanna be <strong>friends</strong> with?
        <br/>
        <small style={{fontSize: '0.8rem', textTransform: 'lowercase'}}><em>thoughtwell reccommends the following folks...</em></small>
    </React.Fragment>

const App = () => {
    const [ followedUsers, setFollowedUsers ] = useState([])

    const handleFollowAction = (isFollowed, user ) => {
        setFollowedUsers(users => {
            if(isFollowed) {
                return [ ...users, user ]
            } else {
                return users.filter(_user => _user.handle !== user.handle )
            }
        })
    }

    return (
        <div className="container">
            <Header/>
            <UserList users={USERS} onAction={handleFollowAction}>
                <strong className={`follow-stats ${followedUsers.length ? 'follow-stats--followed': ''}`}>
                    Following: { followedUsers.length ? `${followedUsers.length} person(s)` : 'nobody' }
                </strong>
                <br/>
                <UserListTitle/>
            </UserList>
        </div>
    )
}

export default App
