'use strict';
/** @type {import('sequelize-cli').Migration} */

const { DataTypes } = require('sequelize');
const { Sequelize } = require('sequelize');

module.exports = {
  async up(queryInterface, sequelize) {
    // Retrieve the queryInterface from the sequelize instance
    const queryInterface = sequelize.getQueryInterface();

    // Migration tasks using the queryInterface
    await queryInterface.createTable('users', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      balance: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 10000,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });

    await queryInterface.bulkInsert('users', [
      {
        balance: 10000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    // Rollback logic
    await queryInterface.dropTable('users');
  },
};
