import FollowButton from './FollowButton'
import { useFollowStats } from '../contexts/FollowStatsContext'

export default function User({ user: { name, handle, isFollowed } }) {
    const { handleFollowAction } = useFollowStats()
    return (
        <div className="user-cell">
            <img
                className="user-cell__avatar"
                src={`https://avatars.dicebear.com/api/open-peeps/${handle}.svg`}
                alt={name}
            />
            <div className="user-cell__info">
                <h3>{name}</h3>
                <h6>{`@${handle}`}</h6>
            </div>
            <div className="user-cell__actions">
                {/* { isFollowed ?
                    <small className="user-cell__status">following ✓</small> :
                    ''
                } */}
                <FollowButton
                    user={{ name, handle, isFollowed }}
                    onClick={handleFollowAction}
                />
            </div>
        </div>
    )
}
