import { rest } from 'msw'

export const handlers = [
    rest.get('/api/people', (req, res, ctx) => {
        return res(
            // Delays response for 2000ms.
            ctx.delay(2000),
            ctx.json([
                { name: 'Amar', handle: 'amar', isFollowed: false },
                { name: 'Akbar', handle: 'akbar', isFollowed: false },
                { name: 'Anthony', handle: 'anthony', isFollowed: false },
            ])
        )
    }),
]
