import './styles.css'

import Header from './elements/Header'
import UserList from './elements/UserList'

const App = () => {
    return React.createElement('div',
        { className: 'container' },
        React.createElement(Header),
        React.createElement(UserList),
    )
}

ReactDOM.render(React.createElement(App), document.getElementById('app'));
