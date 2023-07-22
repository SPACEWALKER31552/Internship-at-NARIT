const { io } = require("socket.io-client");
const socket = io('http://localhost:3000');
console.log("client established");


socket.on("connect", () => 
{
  console.log(socket.connected + " (Client Connect Successfully)"); // true
  let count = 0 ;
  
  setInterval(() => {
  socket.emit("message", ++count);}, 1000);
});

socket.on("disconnect", () => 
{
  console.log(socket.connected + " (Client Attempt Disconnecting)"); // false
});

