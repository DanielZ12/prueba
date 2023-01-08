'use strict';

/** @type {import('sequelize-cli').Migration} */
const status = 
  [
    {name: "Pendiente"},
    {name: "Pagado"},
    {name: "Eliminado"}
  ]

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('status', status, {}); 
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('status', null, { truncate: true});
  }
};
