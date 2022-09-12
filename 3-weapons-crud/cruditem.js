import Crypto from "crypto"

export default class CrudItem {
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