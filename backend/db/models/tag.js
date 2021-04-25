'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    category_id: DataTypes.INTEGER,
    event_id: DataTypes.INTEGER
  }, {});
  Tag.associate = function(models) {
    // associations can be defined here
    Tag.belongsTo(models.Category, {foreignKey: 'category_id'});
    Tag.belongsTo(models.Event, {foreignKey: 'event_id'});
  };
  return Tag;
};
