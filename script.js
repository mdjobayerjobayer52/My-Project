const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // ফ্রন্টএন্ড থেকে রিকোয়েস্ট আসার অনুমতি দেয়
app.use(express.json()); // JSON ডাটা প্রসেস করার জন্য
app.use(express.urlencoded({ extended: true }));

// ১. টেস্ট রুট (সার্ভার ঠিক আছে কিনা চেক করার জন্য)
app.get('/', (req, res) => {
  res.send('Dokan Online BD Server Running Successfully!');
});

// ২. অর্ডার গ্রহণ করার রুট (API Endpoint)
app.post('/api/order', (req, res) => {
  const { name, email, phone, product, quantity, delivery, address } = req.body;

  // ডাটা চেক করা
  if (!name || !phone || !product || !address) {
    return res.status(400).json({ 
      success: false, 
      message: 'প্রয়োজনীয় সব তথ্য সঠিকভাবে পূরণ করুন।' 
    });
  }

  // অর্ডারের তথ্য কনসোলে প্রিন্ট করা (এখানে পরবর্তীতে ডাটাবেজ যুক্ত করতে পারবেন)
  console.log('--- নতুন অর্ডার এসেছে ---');
  console.log(`কাস্টমারের নাম: ${name}`);
  console.log(`ইমেইল: ${email || 'দেওয়া হয়নি'}`);
  console.log(`ফোন নম্বর: ${phone}`);
  console.log(`প্রোডাক্ট: ${product}`);
  console.log(`পরিমাণ: ${quantity}`);
  console.log(`ডেলিভারি এলাকা: ${delivery}`);
  console.log(`ঠিকানা: ${address}`);
  console.log('---------------------------');

  // ফ্রন্টএন্ডে রেসপন্স পাঠানো
  res.status(200).json({
    success: true,
    message: 'ধন্যবাদ! আপনার অর্ডারটি সফলভাবে গ্রহণ করা হয়েছে।',
    orderData: req.body
  });
});

// সার্ভার চালু করা
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});