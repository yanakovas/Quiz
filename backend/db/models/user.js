const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {}
  }
  User.init(
    {
      name: {
        type: DataTypes.TEXT,
        // allowNull: false,
      },
      password: {
        type: DataTypes.TEXT,
        // allowNull: false,
      },
      points: {
        type: DataTypes.TEXT,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
