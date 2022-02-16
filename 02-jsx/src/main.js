import './styles.css'

import Header from './elements/Header'
import UserList from './elements/UserList'

const USERS = [
    { name: 'Amar', handle: 'amar'},
    { name: 'Akbar', handle: 'akbar'},
    { name: 'Anthony', handle: 'anthony'}
]

const App = () => {
    return React.createElement('div',
        { className: 'container' },
        React.createElement(Header),
        React.createElement(UserList, { users: USERS }),
    )
}

ReactDOM.render(React.createElement(App), document.getElementById('app'));
