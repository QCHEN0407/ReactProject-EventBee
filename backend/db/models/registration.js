'use strict';
module.exports = (sequelize, DataTypes) => {
  const Registration = sequelize.define('Registration', {
    user_id: DataTypes.INTEGER,
    ticket_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {});
  Registration.associate = function(models) {
    // associations can be defined here
    Registration.belongsTo(models.User, {foreignKey: 'user_id'});
    Registration.belongsTo(models.Ticket, {foreignKey: 'ticket_id'});
  };
  return Registration;
};
