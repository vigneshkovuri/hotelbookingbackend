const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser = require("body-parser");

var mongoURL='mongodb+srv://FalconTeam:vignesh2004@atlascluster.lgojnqh.mongodb.net/Hotel'

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var connection = mongoose.connection;

connection.on('error', () => {
  console.log("Mongo DB Connection Failed");
});

connection.on('connected', () => {
  console.log("Mongo DB Connection Successful");
});
//const dbConfig = require("./db");
const roomsRoute = require("./routes/roomRoute");
const usersRoute = require("./routes/userRoute");
const bookingRoute = require("./routes/bookingRoute");


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}))
app.use(cors())
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);
app.use("/api/bookings", bookingRoute);


const port = process.env.PORT || 4000;
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Node app listening on ${port} port!`));
