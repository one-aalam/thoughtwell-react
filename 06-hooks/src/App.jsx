import React, { useState } from 'react'
import Header from './components/Header'
import UserList from './components/UserList'
import UserSearchForm from './components/UserSearchForm'

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
    const [ userQuery, setUserQuery ] = useState()

    const handleFollowAction = (isFollowed, user ) => {
        setFollowedUsers(users => {
            if(isFollowed) {
                return [ ...users, user ]
            } else {
                return users.filter(_user => _user.handle !== user.handle )
            }
        })
    }

    const handleSearch = (query) => setUserQuery(query)

    return (
        <div className="container">
            <Header/>
            <UserSearchForm onSearch={handleSearch}/>
            <UserList users={
                userQuery ?
                    USERS.filter(user => user.name.toLowerCase().indexOf(userQuery) !== -1 ) :
                    USERS
                } onAction={handleFollowAction}>
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
