import { useState } from 'react'

const FollowButton = ({ user: { name, handle, isFollowed: userIsFollowed = false } }) => {
    const [ isFollowed, setIsFollowed ] = useState(userIsFollowed)
    return (
        <button className="follow-btn" onClick={() => setIsFollowed(!isFollowed) }>
            { isFollowed ? `unfollow` : `follow` }
        </button>
    )
}

export default FollowButton
