import User from './User'

export default function UserList({ users }) {
    return (
        <div className="user-list">
            <h4 className="user-list__title">Who to follow</h4>
            {
                users.map(
                    user => <User key={user.handle} name={user.name} handle={user.handle} />
                )
            }
        </div>
    )
}
