import { useState } from 'react'

const FollowButton = ({ user: { name, handle, isFollowed: userIsFollowed = false }, onClick = () => {} }) => {
    const [ isFollowed, setIsFollowed ] = useState(userIsFollowed)
    return (
        <button className="follow-btn" onClick={() => {
            // next is now, set and propagate
            setIsFollowed(isFollowed => !isFollowed)
            onClick(!isFollowed, { name, handle })
        }}>
            { isFollowed ? `unfollow` : `follow` }
        </button>
    )
}

export default FollowButton
