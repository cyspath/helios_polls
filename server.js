const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const http = require('http').Server(app);
let io = require('socket.io')(http);

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// Socket io
let users = {}
io.on('connection', (socket) => {
	users[socket.id] = { id: socket.id };
	io.emit('message', { type: 'updateUsers', users })
	console.log('user connected: ', socket.id);

	socket.on('disconnect', function(){
		delete users[socket.id];
		io.emit('message', { type: 'updateUsers', users })		
		console.log('user disconnected: ', socket.id);
	});

	socket.on('message', (data) => {
		console.log("Message Received: " + data);

		io.emit('message', { type:'addComment', comment: data });    
	});
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

http.listen(3000, () => {
    console.log('started on port 3000');
});