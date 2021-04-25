'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    event_img: DataTypes.STRING,
    event_date: DataTypes.DATE,
    location: DataTypes.STRING,
    lat: DataTypes.DECIMAL,
    long: DataTypes.DECIMAL,
    creater_id: DataTypes.INTEGER
  }, {});
  Event.associate = function(models) {
    Event.belongsTo(models.User, {foreignKey: 'creater_id'});
    Event.hasMany(models.Ticket, {foreignKey: "event_id"});
    Event.hasMany(models.Bookmark, {foreignKey: "event_id"});
    Event.hasMany(models.Tag, {foreignKey: "event_id"});
  };
  return Event;
};
