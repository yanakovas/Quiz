const { User } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await User.bulkCreate([
      {
        name: 'vasya',
        password: 'vasya',
      },
      {
        name: 'dima',
        password: 'dima',
      },
      {
        name: 'vasya',
        password: 'vasya',
      },
    ]);
  },

  async down() {
    await User.destroy({ truncate: { cascade: true } });
  },
};
