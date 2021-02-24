'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('table_example', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      points: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      },
      group_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'groups',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('table_example');
  }
};
