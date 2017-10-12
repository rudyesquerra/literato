'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return [
            queryInterface.renameColumn(
                'Users',
                'password',
                'encryptedPassword'
            ),
            queryInterface.addColumn(
                'Users',
                'salt',
                Sequelize.STRING
            )
        ];
    },

    down: function (queryInterface, Sequelize) {
        return [
            queryInterface.renameColumn(
                'Users',
                'encryptedPassword',
                'password'
            ),
            queryInterface.removeColumn(
                'Users',
                'salt',
                Sequelize.STRING
            )
        ];
    }
};
