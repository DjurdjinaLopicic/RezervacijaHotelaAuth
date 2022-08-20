'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Gradovis', [
      {
        naziv: 'Beograd',
        createdAt: "2022-01-17",
        updatedAt: "2022-01-17"
      },
      {
        naziv: 'Novi Sad',
        createdAt: "2022-01-17",
        updatedAt: "2022-01-17"
      },
      {
        naziv: 'Nis',
        createdAt: "2022-01-17",
        updatedAt: "2022-01-17"
      },
      {
        naziv: 'Kragujevac',
        createdAt: "2022-01-17",
        updatedAt: "2022-01-17"
      },
      {
        naziv: 'Zrenjanin',
        createdAt: "2022-01-17",
        updatedAt: "2022-01-17"
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Gradovis', null, {});
  }
};
