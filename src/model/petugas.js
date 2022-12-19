    // nama_petugas: DataTypes.STRING,
    // jabatan_petugas: DataTypes.STRING,
    // nomor_telepon_petugas: DataTypes.INTEGER,
    // alamat_petugas: DataTypes.STRING

module.exports = (sequelize, DataTypes) => {
  const Petugas = sequelize.define("Petugas", {
    nama_petugas: {
      type: DataTypes.STRING,
    },
    jabatan_petugas: {
      type: DataTypes.STRING,
    },
    nomor_telepon_petugas: {
      type: DataTypes.INTEGER,
    },
    alamat_petugas: {
      type: DataTypes.STRING,
    },
    },{
      freezeTableName: true,
    })
    
  return Petugas
}