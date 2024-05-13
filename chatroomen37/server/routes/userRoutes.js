const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
  // منطق للحصول على المستخدمين
});

router.post('/users', (req, res) => {
  // منطق لإنشاء مستخدم جديد
});

module.exports = router;

- استيراد الطرق في التطبيق الرئيسي: في ملف server.js أو الملف الرئيسي لتطبيقك، استورد ملفات الطرق واستخدمها مع مثيل express الخاص بك. على سبيل المثال:

const userRoutes = require('./routes/userRoutes');
app.use('/api', userRoutes);
