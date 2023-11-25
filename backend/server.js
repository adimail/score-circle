const express = require('express');
const app = express()

const server = require("http").createServer(app)
const {Server} = require("socket.io") 

const io = new Server(server)

//routes
app.get("/", (req, res) =>{
    res.send("This is socket.io server created for collabrative whiteboard project.")
})

io.on("connection", (socket) =>{
    console.log("User connected")
})

const port = process.env.PORT || 5000
server.listen(port, () => console.log("Server is running on http://localhost:5000"))