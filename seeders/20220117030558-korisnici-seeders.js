'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Korisnicis', [
      {
        username: 'lana',
        password: bcrypt.hashSync("lanaa", 10),
        ime: "Lana",
        prezime: "Lalic",
        email: "lala@gmai.com",
        tip: 0,
        createdAt: "2022-01-17",
        updatedAt: "2022-01-17"
      },
      {
        username: 'zika',
        password: bcrypt.hashSync("zikaa", 10),
        ime: "Zika",
        prezime: "Zikic",
        email: "zika@gmai.com",
        tip: 1,
        createdAt: "2022-01-17",
        updatedAt: "2022-01-17"
      },
      {
        username: 'mika',
        password: bcrypt.hashSync("mikaa", 10),
        ime: "Mika",
        prezime: "Mikic",
        email: "mika@gmai.com",
        tip: 2,
        createdAt: "2022-01-17",
        updatedAt: "2022-01-17"
      },
      {
        username: 'lora',
        password: bcrypt.hashSync("loraa", 10),
        ime: "Lora",
        prezime: "Loric",
        email: "lora@gmai.com",
        tip: 0,
        createdAt: "2022-01-17",
        updatedAt: "2022-01-17"
      },
      {
        username: 'bora',
        password: bcrypt.hashSync("boraa", 10),
        ime: "Bora",
        prezime: "Boric",
        email: "bora@gmai.com",
        tip: 1,
        createdAt: "2022-01-17",
        updatedAt: "2022-01-17"
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Korisnicis', null, {});
  }
};
