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
    /* DataTypes y Validations */
    room: {
      type: DataTypes.INTEGER,
      validate:{          //Validamos que los datons ingresados sean numeros
        isNumeric: true,
        isInt: {
          msg: "Debes ingresar un valor numerico"
        }
      }
    },
    countDays:{
      type: DataTypes.INTEGER,
      validate:{          //Validamos que los datons ingresados sean numeros
        isNumeric: true,
        isInt: {
          msg: "Debes ingresar un valor numerico"
        }
      }
    },
    billingId: {
      type: DataTypes.INTEGER,
      validate:{          //Validamos que los datons ingresados sean numeros
        isNumeric: true,
      }
    },
    statusId: {
      type: DataTypes.INTEGER,
      validate:{          //Validamos que los datons ingresados sean numeros
        isNumeric: true,
      }
    }
  }, {
    sequelize,
    timestamps: true,
    createdAt: true,
    modelName: 'Reservation',
    tableName: 'reservations',
  });
  return Reservation;
};