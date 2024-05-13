// chatRoutes.js
const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.post('/send', chatController.sendMessage);
router.get('/receive', chatController.receiveMessage);

module.exports = router;

// chatController.js
exports.sendMessage = (req, res) => {
  // منطق إرسال رسالة
};

exports.receiveMessage = (req, res) => {
  // منطق استقبال رسالة
};
