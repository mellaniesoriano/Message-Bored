module.exports = function(sequelize, DataTypes) {
  let Messages = sequelize.define("messages", {
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
  Messages.associate = function(models) {
    Messages.belongsTo(models.topics,  {
      foreignKey: {
        name: 'topic_id',
        allowNull: false
      }
    });
    Messages.belongsTo(models.users,  {
      foreignKey: {
        name: 'author_id',
        allowNull: false
      }
    });
  };
  return Messages;
};