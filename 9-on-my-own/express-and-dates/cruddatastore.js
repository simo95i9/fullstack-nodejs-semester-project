import CrudItem from "./cruditem.js"

export default class CrudDatastore {
    _data = new Map()

    constructor() {
    }

    addItem = (item) => {
        if (!(item instanceof CrudItem))
            return

        this._data.set(item.id, item)
    }

    addItems = (items) => {
        if (!(items instanceof Array))
            return

        for (const item of items) {
            this.addItem(item)
        }
    }

    getAllItems = () => {
        return [...this._data.values()]
    }

    getItemById = (id) => {
        if (!this._data.has(id))
            return null

        return this._data.get(id)
    }

    deleteAllItems = () => {
        const items = this._data.values()
        this._data.clear()
        return items
    }

    deleteItemById = (id) => {
        if (!this._data.has(id))
            return null

        const item = this._data.get(id)
        this._data.delete(id)
        return item
    }
}