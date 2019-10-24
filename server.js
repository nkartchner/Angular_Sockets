const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public/dist/public')));

app.all('*', (req, res) =>
	res.sendFile(path.resolve(__dirname, 'public/dist/public/index.html'))
);

const server = app.listen(6789, () => console.log('Im all fired up!'));
const io = require('socket.io').listen(server);

const messages = [];
const users = {};

io.on('connection', (socket) => {
	socket.emit('welcome');

	socket.on('new_user_name', (newUsersName) => {
		if (newUsersName) {
			users[socket.id] = newUsersName;
			socket.broadcast.emit('user_joined', newUsersName);
			io.emit('update_messages', messages);
			io.emit('users', users);
		}
	});

	socket.on('new_message', (message) => {
		messages.unshift(message);
		socket.broadcast.emit('new_msg_recieved', message);
		io.emit('update_messages', messages);
	});

	socket.on('disconnect', () => {
		socket.broadcast.emit('user_disconnected', `${users[socket.id]} disconnected!`);
		delete users[socket.id];
		io.emit('users', users);
	});
});
