const { io } = require("socket.io-client");
const socket = io('http://localhost:3000');
const repl = require('repl')
console.log("client established");



socket.on("connect", () => 
{
  console.log(socket.connected + " (Client Connect Successfully)"); // true
});

socket.on("disconnect", () => 
{
  console.log(socket.connected + " (Client Attempt Disconnecting)"); // false
});

repl.start({
      prompt: '',
      eval: (cmd) => {
          socket.send(cmd)
      }
  })

