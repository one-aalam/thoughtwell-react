import User from './User'

export default function UserList({ users, children }) {
    return (
        <div className="user-list">
            <h4 className="user-list__title">{children}</h4>
            {
                users.map(
                    user => <User key={user.handle} user={user} />
                )
            }
        </div>
    )
}
