'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Requests',
            [
              {
                user1Id: 1,
                user2Id: 2,
                book1Id: 1,
                book2Id: 2,
                createdAt: new Date(),
                updatedAt: new Date()
              },
              {
                user1Id: 1,
                user2Id: 2,
  //              book1: ,
                book2Id: 3,
                createdAt: new Date(),
                updatedAt: new Date()
              },
            ])
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Requests', null, {});
  }
};
