'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define('Ticket', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    event_id: DataTypes.INTEGER,
    price: DataTypes.DECIMAL
  }, {});
  Ticket.associate = function(models) {
    // associations can be defined here
    Ticket.belongsTo(models.Event, {foreignKey: 'event_id'});
    Ticket.hasMany(models.Registration, {foreignKey: "ticket_id"});
  };
  return Ticket;
};
