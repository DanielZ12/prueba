'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Status extends Model {
    static associate(models) {
      Status.hasMany(models.Reservation)
    }
  }
  Status.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    createdAt: false,
    modelName: 'Status',
    tableName: 'status',
  });
  return Status;
};