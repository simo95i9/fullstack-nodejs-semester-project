const Crypto = require("crypto")

class CrudItem {
    #id

    constructor(id) {
        this.#id = Crypto.randomUUID()
    }

    get id() { return this.#id }

    toJSON = () => {
        return {
            id: this.id
        }
    }
}

module.exports = CrudItem