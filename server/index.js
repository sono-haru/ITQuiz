// const express = require("express");
// const app = express();

// const http = require("http");
// const server = http.createServer(app);
// const {Server} = require("socket.io");
// const io = new Server(server,{
//     cors: {
//         origin: ["http://localhost:3000"],
//     }
// });

// const PORT = 5000;

// io.on("connection",(socket) =>{
//     console.log("接続しました");
//     socket.on("send_massage", (data) =>{
//         console.log(data);

//         io.emit("received_message",data);
//     })

//     io.on("disconnect" ,() =>{
//         console.log("接続が切れました");
//     });
// });
// server.listen(PORT, () => console.log(`running ${PORT}`));