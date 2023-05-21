const express = require('express');
const app = express();

// Kullanıcı verilerini tutacak basit bir dizi
const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Bob Johnson' }
];

// Tüm kullanıcıları döndüren bir endpoint
app.get('/', (req, res) => {
  res.json(users);
});

// Belirli bir kullanıcıyı döndüren bir endpoint
app.get('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(user => user.id === id);
  
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// Sunucuyu dinlemeye başlayın
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
