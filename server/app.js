// npm install express
const express = require("express");
const app = express();
const httpServer = require("http").createServer(app);
const socketServer = require("socket.io")(httpServer);
// const path = require("path");
app.use(express.static("activity"));
socketServer.on("connection", function (socket) {
    console.log("New client connected");
    console.log(socket.id);
    socket.on("colorChange", function (color) {
        console.log(color);
    })
})
// app.get("/home", function(req, res){
//     res.sendFile(path.join(__dirname,"activity/index.html"));
// })
// tcp => uniqiuely identify server on a machine
httpServer.listen(3000, function () {
    console.log("Server is listening to request at port 3000");
})