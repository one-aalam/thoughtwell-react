import User from './User'

export default function UserList(props) {
    return (
        <div className="user-list" role="list">
            <h4 className="user-list__title" role="heading" aria-level="4">
                {props.children}
            </h4>
            {props.users && props.users.length ? (
                props.users.map((user) => (
                    <User key={user.handle} user={user} />
                ))
            ) : (
                <p>couldn't find any users.</p>
            )}
        </div>
    )
}
