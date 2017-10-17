'use strict';
module.exports = function(sequelize, DataTypes) {
  var Request = sequelize.define('Request', {
    user1Id: DataTypes.INTEGER,
    user2Id: DataTypes.INTEGER,
    book1Id: DataTypes.INTEGER,
    book2Id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
            Request.belongsTo(models.User,{
                foreignKey: 'user1Id',
                onDelete: 'CASCADE'
            }),
            Request.belongsTo(models.User,{
                foreignKey: 'user2Id',
                onDelete: 'CASCADE'
            }),
            Request.belongsTo(models.Book,{
                foreignKey: 'book1Id',
                onDelete: 'CASCADE'
            }),
            Request.belongsTo(models.Book,{
                foreignKey: 'book2Id',
                onDelete: 'CASCADE'
            })
      }
    }
  });
  return Request;
};
