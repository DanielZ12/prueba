const express = require("express");
const router = express.Router();

const {billing, allBilling } = require("../controllers/billingController")
/* RUTAS */
router
    .get("/", allBilling)
    .post("/", billing)

module.exports = router    
