const { Socket } = require('dgram');

var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on('connection', (Socket)=> {
    console.log("User online");

    socket.on('canvas-data', (data) =>{
        socket.broadcast.emit('canvas-data', data);
    })
})

var server_port = process.env.YOUR_PORT || process.env.PORT || 5000;
http.listen(server_port, () => {
    console.log("Started on: "+server_port);
})