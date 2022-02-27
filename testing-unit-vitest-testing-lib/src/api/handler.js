import { USERS } from '../mocks/fixtures/users'

export const handler = (req, res, next) => {
    if (req.path === '/api/people') {
        return res.end(JSON.stringify(USERS))
    }
    next()
}
