// // src/api/socketServer.js

// import { Server } from 'socket.io';

// export default function handler(req, res) {
//     if (res.socket.server.io) {
//         console.log('Socket is already running');
//         res.end();
//         return;
//     }

//     // Create a new Socket.IO server instance
//     const io = new Server(res.socket.server, {
//         path: '/api/socket.io',
//         cors: {
//             origin: '*',
//             methods: ['GET', 'POST'],
//         },
//     });

//     io.on('connection', (socket) => {
//         console.log('A user connected');

//         socket.on('sendMessage', (message) => {
//             io.emit('receiveMessage', message);
//         });

//         socket.on('disconnect', () => {
//             console.log('User disconnected');
//         });
//     });

//     res.socket.server.io = io;
//     console.log('Socket.io server has been started');
//     res.end();
// }
