'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    static associate(models) {
      Reservation.belongsTo(models.Billing)
      Reservation.belongsTo(models.Status)
    }
  }
  Reservation.init({
    room: DataTypes.INTEGER,
    countDays: DataTypes.INTEGER,
    billingId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps: true,
    createdAt: true,
    modelName: 'Reservation',
    tableName: 'reservations',
  });
  return Reservation;
};