'use strict';

const reservations= [
  {
    room: 24,
    countDays: 5,
    billingId: 1,
    statusId: 1
  }
]
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('reservations', reservations, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reservations', null, {});
  }
};
