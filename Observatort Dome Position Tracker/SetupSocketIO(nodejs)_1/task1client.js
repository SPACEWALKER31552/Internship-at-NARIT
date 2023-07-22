const { io } = require("socket.io-client");
const socket = io('http://localhost:3000');
console.log("establish client");

socket.on("connect", () => 
{
  console.log(socket.connected + " (Client Connect Successfully)"); // true
});

socket.on("disconnect", () => 
{
  console.log(socket.connected + " (Client Attempt Disconnecting)"); // false
});

