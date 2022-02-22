export const handler = (req, res, next) => {
    if (req.path === '/api/people') {
        return res.end(
            JSON.stringify([
                { name: 'Amar', handle: 'amar', isFollowed: false },
                { name: 'Akbar', handle: 'akbar', isFollowed: false },
                { name: 'Anthony', handle: 'anthony', isFollowed: false },
            ])
        )
    }
    next()
}
