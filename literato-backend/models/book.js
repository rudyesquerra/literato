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
          }),
          Book.hasMany(models.Request, {
              foreignKey: 'book1Id',
              as: 'Requests'
          }),
          Book.hasMany(models.Request, {
             foreignKey: 'book2Id',
             as: 'Requests'
         })
      }
    }
  });
  return Book;
};
