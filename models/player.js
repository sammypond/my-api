'use strict';
module.exports = (sequelize, DataTypes) => {
  const player = sequelize.define('player', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    number: DataTypes.INTEGER,
    position: DataTypes.STRING,
    team: DataTypes.STRING
  }, {});
  player.associate = function(models) {
    // associations can be defined here
  };
  return player;
};