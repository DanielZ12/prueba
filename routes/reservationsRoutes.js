const express = require("express");
const router = express.Router();

const {all, create, update, remove } = require("../controllers/reservationsController")

router
    .get("/", all)

module.exports = router    
