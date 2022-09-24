import sanitizeHtml from 'sanitize-html'

export function basic_logger(format_string = "${req.method.padStart(6)} ${req.path.padEnd(64)} ${JSON.stringify(req.query)} - ${JSON.stringify(req.body)} - ${req.ip}") {
    return (req, res, next) => {
        console.log(eval('`' + format_string + '`')) // This is just plain disgusting
        next()
    }
}

export function input_sanitizer() {
    return (req, res, next) => {
        if (req.method === "POST" || req.method === "PUT" || req.method === "PATCH") {
            Object.entries(req.body)
                .filter(([key, value]) => typeof value === 'string')
                .forEach(([key, value]) => req.body[key] = sanitizeHtml(value))
        }
        next()
    }
}

// Recursively enumerate all properties and functions of an object and its prototype chain
// https://stackoverflow.com/a/60400899
export function getAllPropertyDescriptors(obj) {
    if (!obj) {
        return Object.create(null);
    } else {
        const proto = Object.getPrototypeOf(obj);
        return {
            ...getAllPropertyDescriptors(proto),
            ...Object.getOwnPropertyDescriptors(obj)
        };
    }
}
