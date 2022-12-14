// const cors = require('cors');
// const mongoose = require('mongoose');
// const morgan = require('morgan');
// const body_parser = require('body-parser');
// const path = require('path');
// const express = require('express');
// const app = express();
// // const http = require('http');
// // const server = http.createServer(app);
// // const { Server } = require('socket.io');
// // const io = new Server(server);
// const routes = require('./Server/Routes/routes');
// const connectDB = require('./Server/Database/connection');
// const port = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());
// app.use(morgan('tiny'));
// app.use(body_parser.urlencoded({ extended: true }));
// connectDB();

// app.use('/', routes);
// app.listen(port, () => {
//   console.log(`Server is running on port : ${port}`);
// });
// // io.on('connection', (socket) => {
// //   console.log('a user connected');
// //   socket.on('Chat Message', (msg) => {
// //     console.log(msg);
// //     io.emit('Chat Message', msg);
// //   });
// //   socket.on('disconnect', () => {
// //     console.log('user disconnected');
// //   });
// // });
// // io.on('connection', (socket) => {
// //   console.log('a user connected');
// // });

// // server.listen(2000, () => {
// //   console.log('listening on *:3000');
// // });

//  xxxxxxxxx MY Code XXXXXXXXX

// const express = require('express');
// const app = express();
// const server = require('http').createServer(app);
// const io = require('socket.io').Namespace.listen(server);
// const port = 3000;

// io.on('connection', socket => {
//   console.log('a user is connected :D');
// });

// server.listen([port, () => console.log('Server is connected on ' + port)]);
// const expres

// const express = require('express');
// const app = express();
// const server = require('http').createServer(app);
// const io = require('socket.io').Namespace.listen(server);
// const port = 3000;

// io.on('connection', socket => {
//   console.log('a user is connected :D');
// });

// server.listen([port, () => console.log('Server is connected on ' + port)]);
// const express = require('express');
// const app = express();
// const http = require('http');
// const server = http.createServer(app);
// const {Server} = require('socket.io');
// const io = new Server(server);

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', socket => {
//   console.log('a user is connected :D');
// });

// server.listen(3000, () => {
//   console.log('listening on *:3000');
// });

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

app.get('/h', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on(44, (msg) => {
    console.log(103, msg);
    io.emit(44, msg);
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
