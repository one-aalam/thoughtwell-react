import { useFollowStats } from '../contexts/FollowStatsContext'

const FollowStats = () => {
    const { followedUsers } = useFollowStats()
    return (
        <strong
            data-testid="follow-stats"
            className={`follow-stats ${
                followedUsers.length ? 'follow-stats--followed' : ''
            }`}
        >
            Following:{' '}
            {followedUsers.length
                ? `${followedUsers.length} person(s)`
                : 'nobody'}
        </strong>
    )
}

export default FollowStats
