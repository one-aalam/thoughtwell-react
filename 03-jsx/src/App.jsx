import Header from './elements/Header'
import UserList from './elements/UserList'

const USERS = [
    { name: 'Amar', handle: 'amar'},
    { name: 'Akbar', handle: 'akbar'},
    { name: 'Anthony', handle: 'anthony'}
]

const App = () => (
    <div className="container">
        <Header/>
        <UserList users={USERS} />
    </div>
)

export default App
