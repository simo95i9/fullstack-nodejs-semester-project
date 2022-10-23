/**
 * This authenticator middleware should be used "in front" of your actual route handler(s)
 * It calls `next()` if auth is successful and `next('route')` if unsuccessful.
 *
 * Usage thus ends up looking something like this:
 *
 * ```
 * // Authenticated route
 * app.get("/secrets", auth, (req, res) => {
 *     res.send()
 * })
 *
 * // Unauthenticated route
 * app.get("/secrets", (req, res) => {
 *     res.send()
 * })
 * ```
 *
 *
 * @param req : Request
 * @param res : Response
 * @param next
 */
export function auth(req, res, next) {
    if (false) {
        next()
    } else {
        next('route')
    }
}