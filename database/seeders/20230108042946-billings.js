'use strict';

const billings = [{
  fullName: "Daniel",
  identification: 41009319,
  methodPaid: "Tarjeta",
  totalPaid: 5,
  createdAt: new Date(),
  updatedAt: new Date(),
}]
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('billings', billings, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('billins', null, { truncate: true });
  }
};
