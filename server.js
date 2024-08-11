const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const { Server } = require('socket.io');
const cookie = require('cookie');
const jwt = require('jsonwebtoken');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
let receiverId;

app.prepare().then(() => {
  
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  const io = new Server(server);

  io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    socket.on('message', (msg) => {
      console.log(msg, 'hai how are you are u fine')
      receiverId = msg.receiver;
      try {
        console.log('hai u')
        const cookies = socket.request.headers.cookie || '';
        const parsedCookies = cookie.parse(cookies);
        const token = parsedCookies.token;
       
        if (!token) {
          console.log('No token provided');
        }
        let decodedToken
        try {
           msg.senderId = decodedToken.id;
           const secretKey = '123456'
           decodedToken = jwt.verify(token, secretKey)
           console.log(decodedToken.id, 'this is the id')
           
        } catch (error) {
            console.log(error, 'error while sending message')
        }
      } catch (error) {
       console.log(error, 'no token')
      }
      io.emit('message', msg);
    });

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});






















// {
//   "name": "e-commerce",
//   "version": "0.1.0",
//   "private": true,
//   "scripts": {
//     "dev": "node server.js",
//     "build": "next build",
//     "lint": "next lint",
//     "start": "node server.js",
//     "start:socket": "node socket-server.js"
//   },
//   "dependencies": {
//     "@reduxjs/toolkit": "^2.2.7",
//     "axios": "^1.7.2",
//     "bcrypt": "^5.1.1",
//     "dotenv": "^16.4.5",
//     "jsonwebtoken": "^9.0.2",
//     "mongoose": "^8.5.0",
//     "next": "14.2.5",
//     "nodemailer": "^6.9.14",
//     "react": "^18",
//     "react-dom": "^18",
//     "react-redux": "^9.1.2",
//     "redux-persist": "^6.0.0",
//     "socket.io": "^4.7.5",
//     "socket.io-client": "^4.7.5"
//   },
//   "devDependencies": {
//     "@types/node": "^20",
//     "@types/react": "^18",
//     "@types/react-dom": "^18",
//     "eslint": "^8",
//     "eslint-config-next": "14.2.5",
//     "postcss": "^8",
//     "tailwindcss": "^3.4.1",
//     "typescript": "^5"
//   }
// }

