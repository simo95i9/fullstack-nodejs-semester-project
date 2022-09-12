const CrudItem = require("./cruditem")

class CrudDatastore {
    #data = [];

    constructor() {
    }

    get data() { return this.#data }

    addItem = (item) => {
        if (!(item instanceof CrudItem))
            return

        this.#data.push(item)
    }

    addItems = (items) => {
        if (!(items instanceof Array))
            return

        for (const item of items) {
            this.addItem(item)
        }
    }

    getAllItems = () => {
        return this.#data
    }

    getItemById = (id) => {
        return this.#data.find(item => item.id === id)
    }
}

module.exports = CrudDatastore