export default function User({ name, handle }) {
    return (
        <div className="user-cell">
            <img className="user-cell__avatar" src={`https://avatars.dicebear.com/api/open-peeps/${handle}.svg`} alt={name} />
            <div className="user-cell__info">
                <h3>{name}</h3>
                <h6>{`@${handle}`}</h6>
            </div>
            <div className="user-cell__actions">
                <button onClick={() => alert(`Mr. ${name} is followed now!`) }>follow</button>
            </div>
        </div>
    )
}
