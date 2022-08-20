'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('TipoviSobas', [
      {//1
        tip: 'jednokrevetna',
        createdAt: "2022-01-17",
        updatedAt: "2022-01-17"
      },
      {//2
        tip: 'dvokrevetna',
        createdAt: "2022-01-17",
        updatedAt: "2022-01-17"
      },
      {//3
        tip: 'trokrevetna',
        createdAt: "2022-01-17",
        updatedAt: "2022-01-17"
      },
      {//4
        tip: 'cetvorokrevetna',
        createdAt: "2022-01-17",
        updatedAt: "2022-01-17"
      },
      {//5
        tip: 'petokrevetna',
        createdAt: "2022-01-17",
        updatedAt: "2022-01-17"
      },
      {//6
        tip: 'porodicna',
        createdAt: "2022-01-17",
        updatedAt: "2022-01-17"
      },
      {//7
        tip: 'suite',
        createdAt: "2022-01-17",
        updatedAt: "2022-01-17"
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('TopoviSobas', null, {});
  }
};
