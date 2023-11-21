const mongoose = require("mongoose");

var mongoURL='mongodb+srv://FalconTeam:vignesh2004@atlascluster.lgojnqh.mongodb.net/Hotel'

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var connection = mongoose.connection;

connection.on('error', () => {e
  console.log("Mongo DB Connection Failed");
});

connection.on('connected', () => {
  console.log("Mongo DB Connection Successful");
});

module.exports = mongoose;
