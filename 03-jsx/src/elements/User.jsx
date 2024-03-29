const FollowButton = ({ user: { name, handle, isFollowed = true } }) => {
    return (
        <button className="follow-btn" onClick={() => alert(`Mr. ${name} is ${isFollowed ? 'unfollowed' : 'followed' } now!`) }>
            { isFollowed ? `unfollow` : `follow` }
        </button>
    )
}

export default function User({ user: { name, handle, isFollowed } }) {
    return (
        <div className="user-cell">
            <img className="user-cell__avatar" src={`https://avatars.dicebear.com/api/open-peeps/${handle}.svg`} alt={name} />
            <div className="user-cell__info">
                <h3>{name}</h3>
                <h6>{`@${handle}`}</h6>
            </div>
            <div className="user-cell__actions">
                { isFollowed ?
                    <small className="user-cell__status">following ✓</small> :
                    <FollowButton user={{ name, handle, isFollowed }} />
                }
            </div>
        </div>
    )
}
