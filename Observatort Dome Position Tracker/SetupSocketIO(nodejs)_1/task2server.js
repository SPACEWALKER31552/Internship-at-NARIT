const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, { /* options */ });

io.on('connection', (socket) => 
{
    console.log('client connected')
	
	socket.on("message", (arg) => 
	{
		console.log(arg); // count
	});
	socket.on("disconnect", (ext) => 
	{
		console.log('client disconnected')
	});
})


httpServer.listen(3000);
console.log("server listening on port: 3000");