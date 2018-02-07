const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000
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

http.listen(PORT, () => {
    console.log(`Tuddle is listening on ${ PORT }`);
});


// Socket io and database-less data management
let users = {};
let comments = [];

const emitUsers = () => {
	return io.emit('message', { action: 'UPDATE_USERS', value: users });	
};

const emitCurrentUser = (socket) => {
	return io.to(socket.id).emit('message', { action: 'CURRENT_USER', value: users[socket.id] });	
};

const allVoted = (users) => {
	for (let key in users) {
		if (users[key].vote === undefined || users[key].voted === false) {
			return false;
		}
	}
	return true;
}

const setAll = (options) => {
	let user;
	for (let key in users) {
		user = Object.assign(users[key], options);
		users[key] = user;
	}
}

io.on('connection', (socket) => {
	
	if (!users[socket.id]) {
		users[socket.id] = { id: socket.id, avatar: '', vote: undefined, voted: false, reveal: false };
	}
	
	emitCurrentUser(socket);
	emitUsers();
	console.log('user connected: ', socket.id);

	socket.on('disconnect', function(){
		delete users[socket.id];
		emitUsers();
		console.log('user disconnected: ', socket.id);
	});

	socket.on('message', (json) => {
		let data = JSON.parse(json);
		data.id = socket.id;

		console.log('Server: received message', data);
	
		switch(data.action) {
			case 'CANCEL_VOTE':				
				users[data.id].vote = undefined;
				users[data.id].voted = false;				
				emitUsers();
				break;

			case 'NEW_COMMENT':				
				comments.push({ id: data.id, value: data.value });
				io.emit('message', data);
				break;
			
			case 'NEW_VOTE':	
				console.log('new vote')			
				users[data.id].vote = data.value;
				users[data.id].voted = true;
				if (allVoted(users)) {
					setAll({ reveal: true });
				}
				emitUsers();
				break;

			case 'RESET_VOTES':
				for (var id in users) {
					users[id].voted = false;
					users[id].vote = undefined;
					users[id].reveal = false;					
				}	
				emitUsers();
				break;
				
			case 'REVEAL_VOTES':
				for (var id in users) {
					users[id].reveal = true;					
				}	
				emitUsers();
				break;
			
			case 'UPDATE_AVATAR':				
				users[data.id].avatar = data.value;				
				emitUsers();
				break;

			default:
				console.log('def');
				
				comments.push({ id: socket.id, value: data.value });			
		}
	});
	
});