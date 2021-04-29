'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Tickets', [
        {
          id:1,
          event_id: 1,
          title: 'Free Registration',
          description: 'RSVP to secure your spot',
          price: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id:2,
          event_id: 2,
          title: 'Book and ticket: The Mirror and the Light',
          description: 'Sales end on 29 May 2021',
          price: 49.99,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id:3,
          event_id: 2,
          title: 'Member Discount',
          description: 'Sales end on 29 May 2021',
          price: 39.99,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id:4,
          event_id: 3,
          title: 'Exclusive Workshop Admission',
          description: 'Your exclusive admission to Vegan for Beginners workshop.',
          price: 5.99,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id:5,
          event_id: 4,
          title: 'Free Registration',
          description: 'RSVP to secure your spot',
          price: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id:6,
          event_id: 5,
          title: 'RECORDING ONLY Suggested Donation',
          description: 'Fees will be calculated before you place your order.',
          price: 12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id:7,
          event_id: 6,
          title: 'General Admission',
          description: 'Sales end on 5 Jun 2021',
          price: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id:8,
          event_id: 6,
          title: 'General Admission',
          description: 'Sales end on 5 Jun 2021',
          price: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id:9,
          event_id: 7,
          title: 'General Admission',
          description: 'Sales end on 5 Jun 2021',
          price: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id:10,
          event_id: 8,
          title: 'General Admission',
          description: 'Sales end on 5 Jun 2021',
          price: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id:11,
          event_id: 9,
          title: 'General Admission',
          description: 'Sales end on 5 Jun 2021',
          price: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id:12,
          event_id: 10,
          title: 'General Admission',
          description: 'Sales end on 5 Jun 2021',
          price: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Tickets', null, {});

  }
};
