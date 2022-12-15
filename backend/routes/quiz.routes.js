const mainRouter = require('express').Router();
const { Quiz } = require('../db/models');

mainRouter.get('/', async (req, res) => {
  const quizes = await Quiz.findAll({
    order: [
      ['createdAt', 'DESC'],
      ['id', 'DESC'],
    ],

    include: [Quiz.Topic],
  });

  res.json(quizes);
});
