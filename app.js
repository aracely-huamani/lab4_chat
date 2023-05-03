const express = require('express')
const app=express()

const http=require('http')
const server = http.createServer(app)

const {Server} =require('socket.io')
const io= new Server(server)

io.on('connection', (socket) =>{
    socket.on('chat',(msg)=>{
        io.emit('chat',msg)
    })
})

app.use(express.static(`${__dirname}/public`));


app.get('/',(req,resp)=>{
    resp.sendFile(`${__dirname}/chat_view.html`)
})

server.listen(3000,()=>{
    console.log('Servidor corriendo en htttp://localhost:3000')
})

