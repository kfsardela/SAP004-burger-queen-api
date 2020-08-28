'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('ProductsOrders', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            descricao: {
                type: Sequelize.STRING
            },
            preco: {
                type: Sequelize.DECIMAL
            },
            quantidade: {
                type: Sequelize.INTEGER
            },
            order_id: {
                type: Sequelize.INTEGER,
                references: { model: 'Orders', key: 'id' }
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('ProductsOrders');
    }
};