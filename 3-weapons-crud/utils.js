export function basic_logger(format_string = "${req.method.padStart(6)} ${req.path.padEnd(64)} ${JSON.stringify(req.query)} - ${req.ip}") {
    return (req, res, next) => {
        console.log(eval('`' + format_string + '`')) // This is just plain disgusting
        next()
    }
}