const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const sessionConfig = require('./sessionConfig');
const getUser = require('../middlewares/getUser');

function expressConfig(app) {
  // плагины - миддлварки

  app.use(session(sessionConfig));

  // логирование запросов
  app.use(morgan('dev'));

  // парсинг тела пост-запроса из формы
  app.use(express.urlencoded({ extended: true }));

  // миддлварка для отправки фечей с клиента в формате JSON
  app.use(express.json()); // тело запроса, распарсить => req.body

  // настраиваем статические файлы из папки public
  // app.use(express.static(path.join(__dirname, '../public')));

  app.use(getUser);
}

module.exports = expressConfig;
