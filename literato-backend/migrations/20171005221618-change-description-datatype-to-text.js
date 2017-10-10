'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        queryInterface.changeColumn(
            'Books',
            'description',
            Sequelize.TEXT
        )
    },

    down: function (queryInterface, Sequelize) {
        queryInterface.changeColumn(
            'Books',
            'description',
            Sequelize.STRING
        )
    }
};
