import express from 'express';
import api from './api/index.js';
const app = express();
const cats = {
  cat_id: 1,
  name: 'Fluffy',
  birthday: '2015-03-23',
  weight: 4.5,
  owner: 'Aarni',
  image: 'https://loremflickr.com/320/240/cat',
};

const cats2 = {
  cat_id: 2,
  name: 'Whiskers',
  birthday: '2016-05-23',
  weight: 5.0,
  owner: 'Sam',
  image: 'https://loremflickr.com/320/240/cat',
};

app.get('/', (req, res) => {
  res.send('Welcome to my REST API!');
});

app.get('/api/v1/cat', (req, res) => {
  res.json(cats);
});

app.get('/api/v1/cat/:id', (req, res) => {
  res.json(cats.cat_id);
});

app.post('/api/v1/cat', (req, res) => {
  res.send(cats2);
});

app.put('/api/v1/cat/:id', (req, res) => {
  res.send('Cat item updated');
});

app.delete('/api/v1/cat/:id', (req, res) => {
  res.send('Cat item deleted');
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/public', express.static('public'));

app.use('/api/v1', api);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

export default app;
