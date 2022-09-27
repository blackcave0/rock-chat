const express = require('express');
const app = express();
const http = require('http').createServer(app);

const PORT = process.env.PORT || 3000

http.listen(PORT, ()=>{
    console.log("Server Running", PORT);
})


app.use(express.static(__dirname + '/public'))


app.get('/', (req, res)=>{
    // res.send("Hello Devs")
    res.sendFile(__dirname + '/index.html')
})


// SOCKET.IO
const io = require("socket.io")(http);

io.on('connection', (socket)=>{
    console.log('SERVER CONNECTED ...');

    socket.on('message', (msg)=>{
        // console.log(msg);
        // sending to all client
        socket.broadcast.emit('message', msg)
    })
})