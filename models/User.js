module.exports = function(sequelize, DataTypes) {
  let Users = sequelize.define("users", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  });
  Users.associate = function(models) {
    Users.hasMany(models.topics,  {
      foreignKey: {
        name: 'created_by',
        allowNull: false
      }
    });
    Users.hasMany(models.messages,  {
      foreignKey: {
        name: 'author_id',
        allowNull: false
      }
    });
  };
  return Users;
};