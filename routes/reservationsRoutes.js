const express = require("express");
const router = express.Router();

const {all, create, update, remove } = require("../controllers/reservationsController")

router
    .get("/", all)
    .post("/", create)
    .put("/:id", update)
    .put("/delete/:id", remove)

module.exports = router    
