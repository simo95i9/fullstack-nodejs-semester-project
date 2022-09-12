const CrudItem = require("./cruditem")

class Weapon extends CrudItem {
    #name
    #kind
    #length
    #ammunition
    #origin_region
    #origin_period
    #wikipedia

    constructor(name, kind, length, ammunition, origin_region, origin_period, wikipedia) {
        super()

        this.#name = name
        this.#kind = kind
        this.#length = length
        this.#ammunition = ammunition
        this.#origin_region = origin_region
        this.#origin_period = origin_period
        this.#wikipedia = wikipedia
    }

    get name() { return this.#name }
    get kind() { return this.#kind }
    get length() { return this.#length }
    get ammunition() { return this.#ammunition }
    get origin_region() { return this.#origin_region }
    get origin_period() { return this.#origin_period }
    get wikipedia() { return this.#wikipedia }

    toJSON = () => {
        return {
            id: this.id,
            name: this.name,
            kind: this.kind,
            length: this.length,
            ammunition: this.ammunition,
            origin_region: this.origin_region,
            origin_period: this.origin_period,
            wikipedia: this.wikipedia
        }
    }
}

module.exports = Weapon