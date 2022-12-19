    // tanggal_pengembalian: DataTypes.DATE,
    // id_buku: DataTypes.INTEGER,
    // id_anggota: DataTypes.INTEGER,
    // id_petugas: DataTypes.INTEGER,
    // tanggal_peminjaman: DataTypes.DATE,
    // tanggal_kembali: DataTypes.DATE

module.exports = (sequelize, DataTypes) => {
  const Pengembalian = sequelize.define("Pengembalian", {
    tanggal_pengembalian: {
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
    tanggal_peminjaman: {
      type: DataTypes.DATE,
    },
    tanggal_kembali: {
      type: DataTypes.DATE,
    },
    },{
      freezeTableName: true,
    })
    
  return Pengembalian
}