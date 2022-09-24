import Crypto from "crypto"
import {getAllPropertyDescriptors} from "./utils.js";

export default class CrudItem {
    #id

    constructor(id) {
        this.#id = Crypto.randomUUID()
    }

    get id() { return this.#id }

    toJSON = () => {
        return Object.entries(getAllPropertyDescriptors(this))
            .filter(([key, value]) => typeof value.get === 'function' && key !== '__proto__')
            .map(([key, value]) => { return {[key]: this[key] }})
            .reduce((prev, curr) => { return {...prev, ...curr} })
    }



}