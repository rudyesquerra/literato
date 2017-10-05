'use strict'
var SequelizeMock = require('sequelize-mock')
var dbMock = new SequelizeMock()

module.exports = function(sequelize, DataTypes){
  return dbMock.define('Book', {
    title: 'BOOK 1',
    authors: 'You',
    description: 'a book',
    image: 'asdfasdf'
  })
}
