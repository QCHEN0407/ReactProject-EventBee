'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bookmark = sequelize.define('Bookmark', {
    user_id: DataTypes.INTEGER,
    event_id: DataTypes.INTEGER
  }, {});
  Bookmark.associate = function(models) {
    // associations can be defined here
    Bookmark.belongsTo(models.User, {foreignKey: 'user_id'});
    Bookmark.belongsTo(models.Event, {foreignKey: 'event_id'});
  };
  return Bookmark;
};
