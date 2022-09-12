/**
 * @param req : Request<>
 * @param res
 * @param next
 */
export function basic_logger(req, res, next) {
    console.log(`${req.method} ${req.path.padEnd(32)} ${req.ip}`)
    next()
}