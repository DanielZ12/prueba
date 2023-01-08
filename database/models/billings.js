'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Billing extends Model {
    static associate(models) {
      Billing.hasMany(models.Reservation)
    }
  }
  Billing.init({
    fullName: DataTypes.STRING,
    identification: DataTypes.INTEGER,
    methodPaid: DataTypes.STRING,
    totalPaid: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps: true,
    createdAt: true,
    modelName: 'Billing',
    tableName: 'billings',
  });
  return Billing;
};