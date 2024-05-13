
const axios = require('axios');

const url = 'https://i-po.000webhostapp.com/';
const data = {
  key1: 'value1',
  key2: 'value2'
};

axios.post(url, data)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });




const fetch = require('node-fetch'); // تأكد من تثبيت node-fetch إذا كنت تستخدم Node.js

const url = 'https://i-po.000webhostapp.com/';
const data = {
  key1: 'value1',
  key2: 'value2'
};

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error(error);
});


// في ملف JavaScript على الفرونت إند
axios.get('https://i-po.000webhostapp.com/')
  .then(function (response) {
    // تعامل مع النجاح
    console.log(response.data);
  })
  .catch(function (error) {
    // تعامل مع الخطأ
    console.log(error);
  });


axios.post('https://i-po.000webhostapp.com/', {
  key1: 'value1',
  key2: 'value2'
})
.then(function (response) {
  // handle success
  console.log(response.data);
})
.catch(function (error) {
  // handle error
  console.log(error);
});


axios.put('https://i-po.000webhostapp.com/', {
  key1: 'new value'
})
.then(function (response) {
  // handle success
  console.log(response.data);
})
.catch(function (error) {
  // handle error
  console.log(error);
});


axios.delete('https://i-po.000webhostapp.com/')
.then(function (response) {
  // handle success
  console.log('Data deleted');
})
.catch(function (error) {
  // handle error
  console.log(error);
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

function appendMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.innerText = message;
  messageContainer.append(messageElement);
}