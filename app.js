require('dotenv').config()
const express = require('express');
const app = express();

//Setings
const PORT = process.env.PORT || 3030;


const reservationRouter = require("./routes/reservationsRoutes")

app.use("/reservation", reservationRouter)

app.get('/', function (req, res) {
    res.send("HOlaaaa")
} )
app.listen(PORT, function(){
    console.log(`La app ha arrancado en http://localhost:${PORT}`);
})