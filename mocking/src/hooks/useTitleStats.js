import { useState, useEffect } from 'react'

const useTitleStats = (followedUsers = []) => {
    const [pageTitle, setPageTitle] = useState()

    useEffect(() => {
        setPageTitle(document.title)
    }, [])

    useEffect(() => {
        document.title = followedUsers.length
            ? `Thoughtwell | Following ${followedUsers.length} person(s)`
            : pageTitle
    }, [followedUsers, pageTitle])
}

export default useTitleStats
