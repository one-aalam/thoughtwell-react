import User from './User'

export default function UserList({ users }) {
    return React.createElement("div", {
        className: "user-list"
      },
      React.createElement("h4", { className: "user-list__title"}, 'Who to follow'),
      users.map(
            user => React.createElement(User, {
                key: user.handle,
                name: user.name ,
                handle: user.handle
            })
      )
    )
}
