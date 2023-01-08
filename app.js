require('dotenv').config()
const express = require('express');
const app = express();

//Setings
const PORT = process.env.PORT || 3030;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const reservationRouter = require("./routes/reservationsRoutes")

app.use("/reservation", reservationRouter)

app.listen(PORT, function(){
    console.log(`La app ha arrancado en http://localhost:${PORT}`);
})