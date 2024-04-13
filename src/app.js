import express from 'express';
import api from './api/index.js';
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to my REST API!');
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/public', express.static('public'));

app.use('/api/v1', api);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

export default app;
