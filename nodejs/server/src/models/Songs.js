
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song',
    {
      title: DataTypes.STRING,
      artist: DataTypes.STRING,
      album: DataTypes.STRING
    })

  return Song
}
