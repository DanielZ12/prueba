require('dotenv').config()
const express = require('express');
const app = express();


const PORT = process.env.PORT || 3030;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservationRouter = require("./routes/reservationsRoutes")
const billingRouter = require("./routes/billingRoutes")

app.use("/reservation", reservationRouter)
app.use("/billing", billingRouter)
/* PUERTO */
app.listen(PORT, function(){
    console.log(`La app ha arrancado en http://localhost:${PORT}`);
})