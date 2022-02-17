import { createContext, useContext } from "react";
import useBrowserState from "../hooks/useBrowserState";


const CONTEXT_VALUE = { followedUsers: [], handleFollowAction: () => {} }

const FollowStatsContext = createContext(CONTEXT_VALUE)

export default FollowStatsContext

/** Helpers */
export const FollowStatsProvider = ({ children }) => {
    const [ followedUsers, setFollowedUsers ] = useBrowserState(`followers`, [])

    const handleFollowAction = (isFollowed, user ) => {
        setFollowedUsers(users => {
            if(isFollowed) {
                return [ ...users, user ]
            } else {
                return users.filter(_user => _user.handle !== user.handle )
            }
        })
    }

    return <FollowStatsContext.Provider value={{ followedUsers , handleFollowAction }}>{children}</FollowStatsContext.Provider>
}

export const useFollowStats = () => {
    const context = useContext(FollowStatsContext)
    if (context === undefined) {
        throw new Error(`useFollowStats must be used within a FollowStatsProvider`)
    }
    return context
}
