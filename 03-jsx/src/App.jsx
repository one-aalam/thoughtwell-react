import Header from './elements/Header'
import UserList from './elements/UserList'

const USERS = [
    { name: 'Amar', handle: 'amar', isFollowed: false },
    { name: 'Akbar', handle: 'akbar', isFollowed: true },
    { name: 'Anthony', handle: 'anthony', isFollowed: false }
]

const App = () => (
    <div className="container">
        <Header/>
        <UserList users={USERS} />
    </div>
)

export default App
