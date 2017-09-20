module.exports = function(sequelize, DataTypes) {
  let Topics = sequelize.define("topics", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  });
  Topics.associate = function(models) {
    Topics.belongsTo(models.users,  {
      foreignKey: {
        name: 'created_by',
        allowNull: false
      }
    });
    Topics.hasMany(models.messages,  {
      foreignKey: {
        name: 'topic_id',
        allowNull: false
      }
    });
  };
  return Topics;
};