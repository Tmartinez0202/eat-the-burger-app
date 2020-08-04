const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", (req, res) => {
    res.redirect("/burgers")
});

router.get("/burgers", (req, res) => {
    burger.all((burgerData) => {
        res.render("index", {burgerData: burgerData})
    });
});

router.post("/burgers/create", (req, res) => {
    burger.create(req.body.burgerName, (result) => {
        console.log(result);
        res.redirect("/");
    });
});

router.put("/burgers/:id", (req, res) => {
    burger.update(req.params.id, (result) => {
        console.log(result);
        res.sendStatus(200);
    });
});

module.exports = router;