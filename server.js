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

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

http.listen(3000, () => {
    console.log('started on port 3000');
});


// Socket io and database-less data management
let users = {};
let comments = [];

io.on('connection', (socket) => {
	console.log('....');
	
	users[socket.id] = { id: socket.id };
	io.emit('message', { type: 'VOTE', action: 'UPDATE_USERS', users })
	console.log('user connected: ', socket.id);

	socket.on('disconnect', function(){
		delete users[socket.id];
		io.emit('message', { type: 'VOTE', action: 'UPDATE_USERS', users })
		console.log('user disconnected: ', socket.id);
	});

	socket.on('message', (json) => {
		let data = JSON.parse(json);
		data.id = socket.id;

		console.log('Server: received message', data);
	
		switch(data.type) {

			case 'NEW_COMMENT':				
				comments.push({ id: data.id, value: data.value });
				io.emit('message', data);
				break;

			case 'NEW_VOTE':				
				users[data.id].estimate = data.value;
				io.emit('message', data);
				break;
			default:
				console.log('def');
				
				comments.push({ id: socket.id, value: data.value });			
		}
	});
	
});