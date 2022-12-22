    // nama_rak: DataTypes.STRING,
    // lokasi_rak: DataTypes.STRING,
    // id_buku: DataTypes.INTEGER

module.exports = (sequelize, DataTypes) => {
  const Rak_Buku = sequelize.define("Rak_Buku", {
    nama_rak: {
      type: DataTypes.STRING,
    },
    lokasi_rak: {
      type: DataTypes.STRING,
    },
    id_buku: {
      type: DataTypes.INTEGER,
    },
    },{
      freezeTableName: true,
    })
    
  return Rak_Buku
}