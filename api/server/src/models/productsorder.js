'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductsOrder = sequelize.define('ProductsOrder', {
    descricao: DataTypes.STRING,
    preco: DataTypes.DECIMAL,
    quantidade: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER
  }, {});
  ProductsOrder.associate = function(models) {
    // associations can be defined here
  };
  return ProductsOrder;
};