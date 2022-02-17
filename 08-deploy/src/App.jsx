import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import UserList from './components/UserList'
import UserSearchForm from './components/UserSearchForm'
import FollowStats from './components/FollowStats'
import useTitleStats from './hooks/useTitleStats'
import { useFollowStats } from './contexts/FollowStatsContext'

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
    const { followedUsers } = useFollowStats()
    const [ userQuery, setUserQuery ] = useState()

    useTitleStats(followedUsers)

    const handleSearch = (query) => setUserQuery(query)

    return (
        <div className="container">
            <Header/>
            <UserSearchForm onSearch={handleSearch}/>
            <UserList users={
                (userQuery ?
                    USERS.filter(user => user.name.toLowerCase().indexOf(userQuery) !== -1 ) :
                    USERS
                ).map(
                    user => ({
                        ...user,
                        isFollowed: followedUsers.find(_user => _user.handle === user.handle)
                    })
                )}>
                <FollowStats/>
                <br/>
                <UserListTitle/>
            </UserList>
        </div>
    )
}

export default App
