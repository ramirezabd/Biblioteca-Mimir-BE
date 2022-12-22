    // tanggal_peminjaman: DataTypes.DATE,
    // id_buku: DataTypes.INTEGER,
    // id_anggota: DataTypes.INTEGER,
    // id_petugas: DataTypes.INTEGER,
    // denda: DataTypes.INTEGER

module.exports = (sequelize, DataTypes) => {
  const Peminjaman = sequelize.define("Peminjaman", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    tanggal_peminjaman: {
      type: DataTypes.DATE,
    },
    denda: {
      type: DataTypes.INTEGER,
    },
    },{
      freezeTableName: true,
      timestamps: false,
    })
    
  return Peminjaman
}