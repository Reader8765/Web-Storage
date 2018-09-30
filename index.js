const App = require('express')(), WebSocketServer = require('ws').Server, wss = new WebSocketServer({port: 40510});

app.get('/',(req, res)=>{res.sendFile(__dirname+"/interface.html")});

app.listen(3000,()=>{console.log("Listening!");})

wss.on('connection',(socket)=>{
  socket.on('message',(msg)=>{console.log(msg)})
  
  socket.send("Server is up!");
});
