import Question from '../models/Question.js';

const getAllQuestions = (req, res) => {
  if (req.query != null)
  Question.find((err, questions) => {
    res.status(200).json(questions);
  });
};

const getAllQuestionsBySubject = (req, res) => {
  Question.find({ subject : req.query.subject }, (err, question) => {
    res.status(200).json(question);
  })
};

const getQuestionById = (req, res) => {
  Question.findById(req.params.id, (err, question) => {
    res.status(200).json(question);
  });
};

const createQuestion = (req, res) => {
  const { question, subject, answers } = req.body;
  const question = new Question({ question, subject, answers });
  question.save((err, question) => {
    res.status(201).json(question);
  });
};

const updateQuestion = (req, res) => {
  const id = req.params.id;
  const { question, subject, answers } = req.body;
  const question = { question, subject, answers };
  const options = {
    new: true
  };
  Question.findByIdAndUpdate(id,question,options, (err, question) => {
    res.status(200).json(question);
  });
};

const deleteQuestion = (req, res) => {
  Question.findByIdAndDelete(req.params.id, err => {
    const msg = { text: 'pregunta borrada' };
    res.status(200).json(msg);
  });
};

const controller = {
  getAllQuestions,
  createQuestion,
  getAllQuestionsBySubject,
  getQuestionById,
  updateQuestion,
  deleteQuestion
};

export default controller;
