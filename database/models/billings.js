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
    /* DataTypes y Validations */
    fullName: {
      type: DataTypes.STRING,
    },
    identification: {
      type: DataTypes.INTEGER,
      validate:{          //Validamos que los datons ingresados sean numeros
        isNumeric: true,
        isInt: {
          msg: "Debes ingresar un valor numerico"
        }
      }
    },
    methodPaid: {
      type: DataTypes.STRING,
    },
    totalPaid: {
      type: DataTypes.INTEGER,
      validate:{          //Validamos que los datons ingresados sean numeros
        isNumeric: true,
        isInt: {
          msg: "Debes ingresar un valor numerico"
        }
      }
    }
  }, {
    sequelize,
    timestamps: true,
    createdAt: true,
    modelName: 'Billing',
    tableName: 'billings',
  });
  return Billing;
};