'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      queryInterface.addColumn(
          'Books',
          'userId',
          Sequelize.INTEGER
      )
  },

  down: function (queryInterface, Sequelize) {
      queryInterface.removeColumn(
          'Books', 'userId'
      )
  }
};
