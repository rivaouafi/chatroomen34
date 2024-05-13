const socket = io('http://localhost:3000'); // Corrected the URL quotes
const messageContainer = document.getElementById('message-container'); // Added missing quotes and corrected the case
const messageForm = document.getElementById('send-container'); // Added missing quotes
const messageInput = document.getElementById('message-input'); // Added missing quotes
const name = prompt('What is your name?'); // Added missing question mark
appendMessage('You joined');
socket.emit('new-user', name);

socket.on('chat-message', data => {
  appendMessage(`${data.name}: ${data.message}`); // Corrected template literals
});
socket.on('user-connected', name => {
  appendMessage(`${name} connected`); // Corrected template literals
});

messageForm.addEventListener('submit', e => {
  e.preventDefault();
  const message = messageInput.value; // Corrected property to get input value
  socket.emit('send-chat-message', message);
  messageInput.value = ''; // Corrected to set the input value to an empty string
});

const io = require('socket.io');


function appendMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.innerText = message;
  messageContainer.append(messageElement);
}