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
	
	if (!users[socket.id]) {
		users[socket.id] = { id: socket.id, avatar: '★', vote: undefined, voted: false };
	}
	
	io.to(socket.id).emit('message', { action: 'CURRENT_USER', value: users[socket.id] });
	io.emit('message', { action: 'UPDATE_USERS', value: users });
	console.log('user connected: ', socket.id);

	socket.on('disconnect', function(){
		delete users[socket.id];
		io.emit('message', { action: 'UPDATE_USERS', value: users })
		console.log('user disconnected: ', socket.id);
	});

	socket.on('message', (json) => {
		let data = JSON.parse(json);
		data.id = socket.id;

		console.log('Server: received message', data);
	
		switch(data.action) {
			
			case 'UPDATE_AVATAR':				
				users[data.id].avatar = data.value;				
				io.emit('message', { action: 'UPDATE_USERS', value: users });
				break;

			case 'NEW_COMMENT':				
				comments.push({ id: data.id, value: data.value });
				io.emit('message', data);
				break;

			case 'NEW_VOTE':				
				users[data.id].vote = data.value;
				users[data.id].voted = true;
				io.emit('message', { action: 'UPDATE_USERS', value: users });
				break;

			case 'RESET_VOTES':
				for (var id in users) {
					users[id].voted = false;
					users[id].vote = undefined;
				}	
				io.emit('message', { action: 'UPDATE_USERS', value: users });
				break;

			case 'CANCEL_VOTE':				
				users[data.id].vote = undefined;
				users[data.id].voted = false;				
				io.emit('message', { action: 'UPDATE_USERS', value: users });
				break;

			default:
				console.log('def');
				
				comments.push({ id: socket.id, value: data.value });			
		}
	});
	
});