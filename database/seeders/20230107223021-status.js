'use strict';
const status = [
  {
    name: "Pendiente",
  },
  {
    name: "Pagado",
  },
  {
    name: "Eliminado",
  }
]

module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Status', status, {});
    
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Status', null, {});
     
  }
};


