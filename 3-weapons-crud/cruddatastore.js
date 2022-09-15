import CrudItem from "./cruditem.js"

export default class CrudDatastore {
    #data = new Map()

    constructor() {
    }

    addItem = (item) => {
        if (!(item instanceof CrudItem))
            return

        this.#data.set(item.id, item)
    }

    addItems = (items) => {
        if (!(items instanceof Array))
            return

        for (const item of items) {
            this.addItem(item)
        }
    }

    getAllItems = () => {
        return [...this.#data.values()]
    }

    getItemById = (id) => {
        if (!this.#data.has(id))
            return null

        return this.#data.get(id)
    }

    deleteAllItems = () => {
        this.#data.clear()
    }

    deleteItemById = (id) => {
        return this.#data.delete(id)
    }
}