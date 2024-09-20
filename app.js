// app.js
const express = require('express');
const bodyParser = require('body-parser');
const { UserController, upload } = require('./controllers/UserController');
const path = require('path');
 
const app = express();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('uploads'));

// Rutas
app.get('/users', UserController.index);
app.get('/users/create', UserController.create);
app.post('/users', upload.single('imagen'), UserController.store);
app.get('/users/:id', UserController.show);
app.get('/users/:id/edit', UserController.edit);
app.post('/users/:id', upload.single('imagen'), UserController.update);
app.post('/users/:id/delete', UserController.delete);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
