import { createContext, useContext } from "react";

const CONTEXT_VALUE = { followedUsers: [] }

const FollowStatsContext = createContext(CONTEXT_VALUE)

export default FollowStatsContext

/** Helpers */
export const FollowStatsProvider = ({ children }) => {
    return <FollowStatsContext.Provider value={CONTEXT_VALUE}>{children}</FollowStatsContext.Provider>
}

export const useFollowStats = () => {
    const context = useContext(FollowStatsContext)
    if (context === undefined) {
        throw new Error(`useFollowStats must be used within a FollowStatsProvider`)
    }
    return context
}
