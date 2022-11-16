import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const PORT = process.env.PORT || 4000;
const DB = process.env.DB || 'mongodb+srv://1234:5678@trivia.w6kyffe.mongodb.net/?retryWrites=true&w=majority';

const app = express();

mongoose.connect(DB)
  .then(() => {console.log('conectado a la DB perro')})
  .catch( err => {console.error(err)});

app.use(express.json());

app.use(express.static('public'));

app.use(cors());

import questionRouter from './routes/questions.js';
app.use('/api', questionRouter);

app.listen(PORT, () => {
  console.log('Conectadizimo a ' + PORT)
});
