import User from './User'

export default function UserList(props) {
    return (
        <div className="user-list">
            <h4 className="user-list__title">{props.children}</h4>
            {  props.users.length ?
                props.users.map(
                    user => <User key={user.handle} user={user} onAction={props.onAction} />
                ) :
                <p>couldn't find any users.</p>
            }
        </div>
    )
}
