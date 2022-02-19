import React, { useEffect, useState } from 'react'
import { $fetch } from 'ohmyfetch'
import Header from './components/Header'
import UserList from './components/UserList'
import UserSearchForm from './components/UserSearchForm'
import FollowStats from './components/FollowStats'
import useTitleStats from './hooks/useTitleStats'
import { useFollowStats } from './contexts/FollowStatsContext'

const UserListTitle = () => (
    <React.Fragment>
        Wanna be <strong>friends</strong> with?
        <br />
        <small style={{ fontSize: '0.8rem', textTransform: 'lowercase' }}>
            <em>thoughtwell reccommends the following folks...</em>
        </small>
    </React.Fragment>
)

const App = () => {
    const [users, setUsers] = useState([])
    const [usersLoading, setUsersLoading] = useState(true)

    const { followedUsers } = useFollowStats()
    const [userQuery, setUserQuery] = useState()

    useTitleStats(followedUsers)

    useEffect(() => {
        $fetch(`/api/people`).then((json) => {
            setUsers(json)
            setUsersLoading(false)
        })
    }, [])

    const handleSearch = (query) => setUserQuery(query)

    return (
        <div className="container">
            <Header />
            <UserSearchForm onSearch={handleSearch} />
            {usersLoading ? (
                'loading user recommendations...'
            ) : (
                <UserList
                    users={(userQuery
                        ? users.filter(
                              (user) =>
                                  user.name.toLowerCase().indexOf(userQuery) !==
                                  -1
                          )
                        : users
                    ).map((user) => ({
                        ...user,
                        isFollowed: followedUsers.find(
                            (_user) => _user.handle === user.handle
                        ),
                    }))}
                >
                    <FollowStats />
                    <br />
                    <UserListTitle />
                </UserList>
            )}
        </div>
    )
}

export default App
