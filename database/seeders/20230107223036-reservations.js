'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const reservations= [
      {
        room: 1,
        count_days: 1,
        statusId: 1,
        createdAt: new Date(),
        updatedAt:new Date()
      }
    ]
    await queryInterface.bulkInsert('Reservations', reservations, {});
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.bulkDelete('Reservations', null, {});
   
  }
};
