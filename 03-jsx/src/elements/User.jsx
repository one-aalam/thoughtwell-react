const FollowButton = ({ name, isFollowed = false }) => {
    return (
        <button className="follow-btn" disabled={isFollowed} onClick={() => alert(`Mr. ${name} is followed now!`) }>
            follow
        </button>
    )
}

export default function User({ name, handle, isFollowed }) {
    return (
        <div className="user-cell">
            <img className="user-cell__avatar" src={`https://avatars.dicebear.com/api/open-peeps/${handle}.svg`} alt={name} />
            <div className="user-cell__info">
                <h3>{name}</h3>
                <h6>{`@${handle}`}</h6>
            </div>
            <div className="user-cell__actions">
                <FollowButton name={name} isFollowed={isFollowed} />
            </div>
        </div>
    )
}
