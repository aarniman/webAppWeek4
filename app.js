import express from 'express';
const hostname = '127.0.0.1';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to my REST API!');
});

app.get('/api/v1/cat', (req, res) => {
  res.json({
    cat_id: 1,
    name: 'Fluffy',
    birthday: '2015-03-23',
    weight: 4.5,
    owner: 'Aarni',
    image: 'https://loremflickr.com/320/240/cat',
  });
});

app.use('/public', express.static('public'));

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
