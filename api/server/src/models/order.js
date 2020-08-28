'use strict';
module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        nome: DataTypes.STRING,
        mesa: DataTypes.STRING,
        hora_fim: DataTypes.DATE,
        hora_inicio: DataTypes.DATE,
        status: DataTypes.STRING,
        total: DataTypes.DECIMAL(10, 2)
    }, {});
    Order.associate = function(models) {
        Order.hasMany(models.ProductsOrder) // associations can be defined here
    };
    return Order;
};