import User from './User'

export default function UserList() {
    return React.createElement("div", {
        className: "user-list"
      },
      React.createElement("h4", { className: "user-list__title"}, 'Who to follow'),
      React.createElement(User, { name: 'Amar', handle: 'amar'} ),
      React.createElement(User, { name: 'Akbar', handle: 'akbar'}),
      React.createElement(User, { name: 'Anthony', handle: 'anthony'}),
    )
}
