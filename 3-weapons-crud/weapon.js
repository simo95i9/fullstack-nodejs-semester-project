import CrudItem from "./cruditem.js"

export default class Weapon extends CrudItem {
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

    set name(name) { this.#name = name }
    set kind(kind) { this.#kind = kind }
    set length(length) { this.#length = length }
    set ammunition(ammunition) { this.#ammunition = ammunition }
    set origin_region(origin_region) { this.#origin_region = origin_region }
    set origin_period(origin_period) { this.#origin_period = origin_period }
    set wikipedia(wikipedia) { this.#wikipedia = wikipedia }

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

    static fromRequestBody(body) {
        if (body === null) { return null }
        if (body.name === undefined) { return null }
        if (body.kind === undefined) { return null }
        if (body.length === undefined) { return null }
        if (body.ammunition === undefined) { return null }
        if (body.origin_region === undefined) { return null }
        if (body.origin_period === undefined) { return null }
        if (body.wikipedia === undefined) { return null }

        return new Weapon(
            body.name,
            body.kind,
            body.length,
            body.ammunition,
            body.origin_region,
            body.origin_period,
            body.wikipedia
        )
    }
}