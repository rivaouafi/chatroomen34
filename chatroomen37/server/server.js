const io = require('socket.io')(3000); // Corrected: Added the server port directly to the require statement
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('index');
});
const userRoutes = require('./routes/userRoutes');
app.use('/api', userRoutes);
const User = require('./models/User');



const users = {};
require('dotenv').config();

io.on('connection', socket => {
  socket.on('new-user', name => {
    users[socket.id] = name;
    socket.broadcast.emit('user-connected', name);
  });

  // Corrected: Fixed the object syntax inside the emit function
  socket.on('send-chat-message', message => {
    socket.broadcast.emit('chat-message', { message: message, name: users[socket.id] });
  });
});