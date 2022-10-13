import express from 'express';
import mongoose from 'mongoose';

const PORT = process.env.PORT || 3000;
const DB = process.env.DB || 'http://localhost/trivia';

const app = express();

mongoose.conect(DB)
  .then(() => {console.log('conectado a la DB perro')})
  .catch( err => {console.err(err)});

app.use(morgan('dev'));
app.use(express.json());

import questionRouter from './routes/question.js';
app.use('/api', questionRouter);

app.listen(PORT, () => {
  console.log('Conectadizimo a ' + PORT)
});
