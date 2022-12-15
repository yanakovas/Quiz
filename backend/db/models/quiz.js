const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Quiz extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Topic }) {
      Quiz.Topic = Quiz.belongsTo(Topic, { foreignKey: 'topic_id' });
    }
  }
  Quiz.init(
    {
      question: DataTypes.TEXT,
      answer: DataTypes.TEXT,
      topic_id: DataTypes.INTEGER,
      que_point: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Quiz',
    }
  );
  return Quiz;
};
