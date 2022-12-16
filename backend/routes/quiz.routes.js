const mainRouter = require('express').Router();
const { Topic } = require('../db/models');

mainRouter.get('/', async (req, res) => {
  const topics = await Topic.findAll({
    order: [
      ['createdAt', 'DESC'],
      ['id', 'DESC'],
    ],

    include: [Topic.Quizes],
  });

  

  res.json(topics);
});
module.exports = mainRouter;
