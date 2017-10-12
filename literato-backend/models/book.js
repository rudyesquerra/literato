'use strict';
module.exports = function(sequelize, DataTypes) {
  var Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    authors: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
          Book.belongsTo(models.User,{
              foreignKey: 'userId',
              onDelete: 'CASCADE'
          })
      }
    }
  });
  return Book;
};
