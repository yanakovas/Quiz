const { Topic, Quiz } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await Quiz.bulkCreate(
      [
        {
          question: 'Вопрос 1',
          answer: 'ответ 1',
          que_point: '100',
          Topic: [
            {
              title: 'Тема 1',
            },
          ],
        },
        {
          question: 'Вопрос 2',
          answer: 'ответ 2',
          que_point: '200',
          Topic: [
            {
              title: 'Тема 1',
            },
          ],
        },
        {
          question: 'Вопрос 3',
          answer: 'ответ 3',
          que_point: '300',
          Topic: [
            {
              title: 'Тема 1',
            },
          ],
        },
        {
          question: 'Вопрос 4',
          answer: 'ответ 4',
          que_point: '400',
          Topic: [
            {
              title: 'Тема 1',
            },
          ],
        },
        {
          question: 'Вопрос 5',
          answer: 'ответ 5',
          que_point: '500',
          Topic: [
            {
              title: 'Тема 1',
            },
          ],
        },

        {
          question: 'Вопрос 1',
          answer: 'ответ 1',
          que_point: '100',
          Topic: [
            {
              title: 'Тема 2',
            },
          ],
        },
        {
          question: 'Вопрос 2',
          answer: 'ответ 2',
          que_point: '200',
          Topic: [
            {
              title: 'Тема 2',
            },
          ],
        },
        {
          question: 'Вопрос 3',
          answer: 'ответ 3',
          que_point: '300',
          Topic: [
            {
              title: 'Тема 2',
            },
          ],
        },
        {
          question: 'Вопрос 4',
          answer: 'ответ 4',
          que_point: '400',
          Topic: [
            {
              title: 'Тема 2',
            },
          ],
        },
        {
          question: 'Вопрос 5',
          answer: 'ответ 5',
          que_point: '500',
          Topic: [
            {
              title: 'Тема 2',
            },
          ],
        },
        {
          question: 'Вопрос 1',
          answer: 'ответ 1',
          que_point: '100',
          Topic: [
            {
              title: 'Тема 3',
            },
          ],
        },
        {
          question: 'Вопрос 2',
          answer: 'ответ 2',
          que_point: '200',
          Topic: [
            {
              title: 'Тема 3',
            },
          ],
        },
        {
          question: 'Вопрос 3',
          answer: 'ответ 3',
          que_point: '300',
          Topic: [
            {
              title: 'Тема 3',
            },
          ],
        },
        {
          question: 'Вопрос 4',
          answer: 'ответ 4',
          que_point: '400',
          Topic: [
            {
              title: 'Тема 3',
            },
          ],
        },
        {
          question: 'Вопрос 5',
          answer: 'ответ 5',
          que_point: '500',
          Topic: [
            {
              title: 'Тема 3',
            },
          ],
        },
      ],
      {
        include: [Quiz.Topic],
      }
    );
  },

  async down() {
    await Quiz.destroy({ truncate: { cascade: true } });
  },
};
