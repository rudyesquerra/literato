'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users',
        [
          {
            name: 'Bianca Portal',
            email: 'bianca@aol.com',
            username: 'bportal',
            //bailey&123
            encryptedPassword: 'c45d963cc00be95336bef421547eb560dda2def545965fb31d843e3183bd1460b74c3bfd80edde978f52e0f0d1851a5a4772abcc2644627292ac88d35b25183c',
            age: 38,
            salt: "d12caaf0-b423-11e7-9303-b337e07d8931",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Kathy Oh',
            email: 'youvebeenKOd@yahoo.com',
            username: 'girl-baller',
            //snacksaregood
            encryptedPassword: 'e030d01cd33d684fb03220a8380c49842b0bcd28bed19adc100f517d208be4ba1e4f858f15c26d9768e3f21a48fbf80c092e52e6e8468fe612a1bc34',
            age: 29,
            salt:"1e020280-b424-11e7-9303-b337e07d8931",
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ])
      },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
