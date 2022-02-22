import { useState } from 'react'

const FollowButton = ({
    user: { name, handle, isFollowed: userIsFollowed = false },
    onClick = () => {},
}) => {
    const [isFollowed, setIsFollowed] = useState(userIsFollowed)

    const handleClick = () => {
        // next is now, set and propagate
        setIsFollowed((isFollowed) => !isFollowed)
        onClick(!isFollowed, { name, handle })
    }

    return (
        <button type="button" className="follow-btn" onClick={handleClick}>
            {isFollowed ? `unfollow` : `follow`}
        </button>
    )
}

export default FollowButton
