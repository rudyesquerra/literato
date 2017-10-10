'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users',
        [
          {
            name: 'Bianca Portal',
            email: 'bianca@aol.com',
            username: 'bportal',
            encryptedPassword: 'bailey&123',
            age: 38,
            salt:"",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Kathy Oh',
            email: 'youvebeenKOd@yahoo.com',
            username: 'girl-baller',
            encryptedPassword: 'snacksaregood',
            age: 29,
            salt:"",
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ])
      },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
