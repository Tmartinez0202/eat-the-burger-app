var orm = require("../config/orm.js");

const burger = {
    all: (cb) => {
        orm.all("burgers", (res) => {
            cb(res)
        })
    },

    create: (name, cb) => {
        orm.create("burgers", ["burgerName", "devoured"], [name, false], cb)
    },

    update: (id, cb) => {
        let condition = "ID = " + id;
        orm.update("burgers", {devoured: true}, condition, cb) 
    }
}
module.exports = burger