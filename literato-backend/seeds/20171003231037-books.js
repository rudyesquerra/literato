'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Books',
  [
    {
      title: 'BOOK 1',
      authors: 'You',
      description: 'a book',
      image: 'asdfasdf',
      userId: 1,
      createdAt: '20170909T1000',
      updatedAt: '20170909T1000'
    },
    {
      title: 'Book 2',
      authors: 'Me',
      description: 'another book',
      image: 'asdfasdf',
      userId: 2,
      createdAt: '20170909T1000',
      updatedAt: '20170909T1000'
    },
    {
      title: 'Book 3',
      authors: 'Him',
      description: 'third book',
      image: 'asdfasdf',
      userId: 2,
      createdAt: '20170909T1000',
      updatedAt: '20170909T1000'
    }
  ])
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Books', null, {})
  }
};
