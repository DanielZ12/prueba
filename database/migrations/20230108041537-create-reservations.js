'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reservations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      room: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      countDays: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      billingId:{
        type: Sequelize.INTEGER,
        references: {
            model: "billings",
            key: "id"
        }
      },
      statusId: {
        type: Sequelize.INTEGER,
        references: {
            model: "status",
            key: "id"
        }
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('reservations');
  }
};