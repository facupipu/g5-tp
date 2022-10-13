import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
  answer: String,
  correct: Boolean
}, { _id: false });

const QuestionSchema = new Schema({
  question: String,
  subject: String,
  answers: [AnswerSchema]
});

const Question = mongoose.model('Question', QuestionSchema);

export default Question;
