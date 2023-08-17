const express = require("express")
const { connectDB } = require("./db/dbConnection");
const routes = require("./routes/v1")
const config = require("./config/config")
const app = express()

// app.listen(8080)

var http = require("http")
// var fs = require("fs")

app.use("/v1",routes);
const server = http.createServer(app);

server.listen(config.port, () => {
  console.log("server raning ............");
});


connectDB()

