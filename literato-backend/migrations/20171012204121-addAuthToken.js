'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
        'Users',
        'authToken',
        Sequelize.STRING)
    queryInterface.addColumn(
        'Users',
        'authTokenExpiration',
        Sequelize.DATE)
  },

  down: function (queryInterface, Sequelize) {
      queryInterface.removeColumn(
          'Users',
          'authToken')
      queryInterface.removeColumn(
          'Users',
          'authTokenExpiration')
  }
};
