import CrudItem from "./cruditem.js";
import {Temporal} from "@js-temporal/polyfill";

export default class Countdown extends CrudItem {
    #title
    #description
    #createdBy
    #createdDate
    #targetDate

    /**
     * @param title : String
     * @param description : String
     * @param createdBy : String
     * @param createdDate : Temporal.ZonedDateTime
     * @param targetDate : Temporal.ZonedDateTime
     */
    constructor(title, description, createdBy, createdDate, targetDate) {
        super()
        this.#title = title
        this.#description = description
        this.#createdBy = createdBy
        this.#createdDate = createdDate
        this.#targetDate = targetDate
    }

    get title() { return this.#title }
    set title(value) { this.#title = value }

    get description() { return this.#description }
    set description(value) { this.#description = value }

    get createdBy() { return this.#createdBy }
    set createdBy(value) { this.#createdBy = value }

    get createdDate() { return this.#createdDate }
    set createdDate(value) { this.#createdDate = Temporal.ZonedDateTime.from(value) }

    get targetDate() { return this.#targetDate }
    set targetDate(value) { this.#targetDate = Temporal.ZonedDateTime.from(value) }

    static fromRequestBody(body) {
        if (body === null) { return null }
        if (body.title === undefined) { return null }
        if (body.description === undefined) { return null }
        if (body.createdBy === undefined) { return null }
        if (body.createdDate === undefined) { return null }
        if (body.targetDate === undefined) { return null }

        const createdDate = Temporal.ZonedDateTime.from(body.createdDate)
        const targetDate = Temporal.ZonedDateTime.from(body.targetDate)

        return new Countdown(
            body.title,
            body.description,
            body.createdBy,
            createdDate,
            targetDate
        )
    }
}