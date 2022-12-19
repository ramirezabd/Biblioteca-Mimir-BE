    // tanggal_peminjaman: DataTypes.DATE,
    // id_buku: DataTypes.INTEGER,
    // id_anggota: DataTypes.INTEGER,
    // id_petugas: DataTypes.INTEGER,
    // denda: DataTypes.INTEGER

module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define("Peminjaman", {
    tanggal_peminjaman: {
      type: DataTypes.DATE,
    },
    id_buku: {
      type: DataTypes.INTEGER,
    },
    id_anggota: {
      type: DataTypes.INTEGER,
    },
    id_petugas: {
      type: DataTypes.INTEGER,
    },
    denda: {
      type: DataTypes.INTEGER,
    },
    },{
      freezeTableName: true,
    })
    
  return Peminjaman
}