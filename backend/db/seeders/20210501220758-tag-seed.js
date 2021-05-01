'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tags', [
      {
        id:1,
        // Mother's Day
        category_id:7,
        event_id: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:2,
        // Mother's Day
        category_id:7,
        event_id: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:3,
        // Mother's Day
        category_id:7,
        event_id: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:4,
        // Food & Drink
        category_id:2,
        event_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // Food & Drink
        id:5,
        category_id:2,
        event_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // Music
        id:6,
        category_id:1,
        event_id: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // Music
        id:7,
        category_id:1,
        event_id: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        //Online Event
        id:8,
        category_id:4,
        event_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        //Online Event
        id:9,
        category_id:4,
        event_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        //Online Event
        id:10,
        category_id:4,
        event_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        //Online Event
        id:11,
        category_id:4,
        event_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        //Online Event
        id:12,
        category_id:4,
        event_id: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        //Online Event
        id:13,
        category_id:4,
        event_id: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // Food & Drink
        id:14,
        category_id:2,
        event_id: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // Food & Drink
        id:15,
        category_id:2,
        event_id: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // Food & Drink
        id:16,
        category_id:2,
        event_id: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // Online Event
        id:17,
        category_id:4,
        event_id: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      }


  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tags', null, {});
  }
};
