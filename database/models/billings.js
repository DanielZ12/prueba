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
      validate:{          //Validamos que los datons ingresados sean letras
        isAlpha: true,
      }
    },
    identification: {
      type: DataTypes.INTEGER,
      validate:{          //Validamos que los datons ingresados sean numeros
        isNumeric: true,
      }
    },
    methodPaid: {
      type: DataTypes.INTEGER,
      validate:{          //Validamos que los datons ingresados sean numeros
        isNumeric: true,
      }
    },
    totalPaid: {
      type: DataTypes.INTEGER,
      validate:{          //Validamos que los datons ingresados sean numeros
        isNumeric: true,
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