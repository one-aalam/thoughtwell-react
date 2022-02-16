import User from './User'

export default function UserList() {
    return React.createElement("div", {
        className: "user-list"
      },
      React.createElement("h4", { className: "user-list__title"}, 'Who to follow'),
      [
        React.createElement(User, { key: 'amar', name: 'Amar', handle: 'amar'} ),
        React.createElement(User, { key: 'akbar', name: 'Akbar', handle: 'akbar'}),
        React.createElement(User, { key: 'anthony', name: 'Anthony', handle: 'anthony'}),
      ]
    )
}
