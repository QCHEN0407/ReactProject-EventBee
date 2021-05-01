'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Categories', [
        {
          id:1,
          category_name: 'Music',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id:2,
          category_name: 'Food & Drink',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id:3,
          category_name: 'Charity',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id:4,
          category_name: 'Online Event',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id:5,
          category_name: 'Sports',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id:6,
          category_name: 'Health',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id:7,
          category_name: "Mother's Day",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id:8,
          category_name: "All Events",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id:9,
          category_name: "Free",
          createdAt: new Date(),
          updatedAt: new Date()
        },

    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Categories', null, {});

  }
};
